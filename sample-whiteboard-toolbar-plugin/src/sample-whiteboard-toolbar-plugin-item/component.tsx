import * as React from 'react';
import { useState, useEffect } from 'react';
import * as ReactModal from 'react-modal';
import './style.css';
import { SampleWhiteboardToolbarPluginProps } from './types';

import * as BbbPluginSdk from 'bigbluebutton-html-plugin-sdk';
import { SettersForExtensibleUIs } from 'bigbluebutton-html-plugin-sdk';

function SampleWhiteboardToolbarPlugin({ pluginUuid: uuid }: SampleWhiteboardToolbarPluginProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isIdle, setIsIdle] = useState<Boolean>(false);
  const pluginApi: SettersForExtensibleUIs = BbbPluginSdk.getPluginApi(uuid)
  const [currentSlideText, setCurrentSlideText] = useState<string>("");

  const currentPresentation = BbbPluginSdk.useCurrentPresentation();

  const setWhiteboardItemSpinner = () => {
    setIsIdle(true);
  }

  const setWhiteboardButtonWaitForClick = () => {
    setIsIdle(false);
  }
  const requestLastPages = (currentTxtUri: string) => fetch(currentTxtUri).then((response) => response.text());

  const handleFetchPresentationData = (currentPres: BbbPluginSdk.Presentation) => {
    const currentTxtUri = currentPres.currentPage.urls.text;
    requestLastPages(currentTxtUri).then(currentPageContent => {
      setCurrentSlideText(currentPageContent)
      setShowModal(true);
    }).catch((err) => {
      console.log("Error while requesting data from bbb-web. Could not get the base text, error: " + err.message);
    }).finally(() => {
      setTimeout(() => {
        setShowModal(false);
        setWhiteboardButtonWaitForClick()
      }, 10000)
    })
  }

  const handleCloseModalAndResetPoll = (): void => {
    setShowModal(false);
  }

  useEffect(() => {
    let currentObjectToSendToClient: BbbPluginSdk.WhiteboardToolbarItem;
    if (!isIdle){
      currentObjectToSendToClient = new BbbPluginSdk.WhiteboardToolbarButton({
          label: "10 seconds",
          tooltip: "this is a button injected by plugin",
          onClick: () => {
            handleFetchPresentationData(currentPresentation);
            setWhiteboardItemSpinner();
          },
        }
      )
    } else {
      currentObjectToSendToClient = new BbbPluginSdk.WhiteboardToolbarSpinner();
    }
    pluginApi.setWhiteboardToolbarItems([currentObjectToSendToClient]);
  }, [isIdle, currentPresentation])

  return (
    <ReactModal
      className="plugin-modal"
      overlayClassName="modal-overlay"
      isOpen={showModal}
      onRequestClose={handleCloseModalAndResetPoll}
    >
      <div
        style={{width: '100%', height: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column'}}
      >
        <h1>Hey, I am a modal sample</h1>
        <div className='current-slide-text-container'>
          {currentSlideText}
        </div>
        <button
          onClick={() => {setShowModal(false)}}
        >
          Close Modal
        </button>
      </div>
    </ReactModal>
  );
}

export default SampleWhiteboardToolbarPlugin;
