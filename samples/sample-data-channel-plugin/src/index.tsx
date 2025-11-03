import { BbbPluginSdk } from 'bigbluebutton-html-plugin-sdk';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import SampleDataChannelPlugin from './components/sample-data-channel-plugin-item/component';

const uuid = document.currentScript?.getAttribute('uuid') || 'root';

const pluginName = document.currentScript?.getAttribute('pluginName') || 'plugin';

const root = ReactDOM.createRoot(document.getElementById(uuid));

export const { logger: pluginLogger } = BbbPluginSdk.getPluginApi(uuid);

root.render(
  <SampleDataChannelPlugin {...{
    pluginUuid: uuid,
    pluginName,
  }}
  />,
);
