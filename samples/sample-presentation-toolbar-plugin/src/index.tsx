import { BbbPluginSdk } from 'bigbluebutton-html-plugin-sdk';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import SamplePresentationToolbarPlugin from './sample-presentation-toolbar-plugin-item/component';

const uuid = document.currentScript?.getAttribute('uuid') || 'root';

const pluginName = document.currentScript?.getAttribute('pluginName') || 'plugin';

export const { logger: pluginLogger } = BbbPluginSdk.getPluginApi(uuid);

const root = ReactDOM.createRoot(document.getElementById(uuid));
root.render(
  <SamplePresentationToolbarPlugin {...{
    pluginUuid: uuid,
    pluginName,
  }}
  />,
);
