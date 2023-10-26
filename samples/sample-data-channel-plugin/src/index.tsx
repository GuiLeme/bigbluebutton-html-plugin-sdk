import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import SampleDataChannelPlugin from './sample-data-channel-plugin-item/component';

const uuid = document.currentScript?.getAttribute('uuid') || 'root';

const pluginName = document.currentScript?.getAttribute('pluginName') || 'plugin';

const root = ReactDOM.createRoot(document.getElementById(uuid));
root.render(
  <React.StrictMode>
    <SampleDataChannelPlugin {...{
      pluginUuid: uuid,
      pluginName,
    }}
    />
  </React.StrictMode>,
);
