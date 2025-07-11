import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import SampleMediaAreaPlugin from './components/sample-media-area-plugin/component';

const uuid = document.currentScript?.getAttribute('uuid') || 'root';

const pluginName = document.currentScript?.getAttribute('pluginName') || 'plugin';

const root = ReactDOM.createRoot(document.getElementById(uuid));
root.render(
  <SampleMediaAreaPlugin {...{
    pluginUuid: uuid,
    pluginName,
  }}
  />,
);
