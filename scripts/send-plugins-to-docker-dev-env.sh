#!/bin/bash

# Change to the directory where the script is located
cd "$(dirname "$0")"
cd ..

OPTSTRING=":pi"
run_publish_to_project_folder=false
force_run_npm_ci=false

while getopts ${OPTSTRING} opt; do
  case ${opt} in
    i)
      # This will force every plugin to run npm ci
      echo Force every plugin to run npm ci
      force_run_npm_ci=true
      ;;
    p)
      # This flag will run the script to publish current
      # working version of SDK to samples
      echo Publish current SDK to samples for test
      run_publish_to_project_folder=true
      ;;
    ?)
      echo "Invalid option: -${OPTARG}."
      exit 1
      ;;
  esac
done

if [ "$run_publish_to_project_folder" = true ] ; then
  npm ci
  npm run build
fi
echo Start processing of samples
for dir in samples/*
do
  if [ -d "$dir/tests" ]; then
    echo Identified test cases in $dir
    echo Installing dependencies in $dir
    cd $dir
    if [ "$force_run_npm_ci" = true ] ; then
      rm -rf node_modules
      npm ci
    fi
    if [ "$run_publish_to_project_folder" = true ] ; then
      ./../../scripts/publish-to-project-folder.sh .
    fi
    npm run build-bundle
    echo Sending $dir to container
    npm run copy-sample-to-container
    cd -
  fi
done
