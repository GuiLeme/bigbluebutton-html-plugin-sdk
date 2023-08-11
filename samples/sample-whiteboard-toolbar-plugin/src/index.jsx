import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SamplePresentationToolbarPlugin from './sample-presentation-toolbar-plugin-item/component';

const uuid = document.currentScript?.getAttribute('uuid') || 'root';

const pluginName = document.currentScript?.getAttribute('pluginName') || 'plugin';

const root = ReactDOM.createRoot(document.getElementById(uuid));
root.render(
  <React.StrictMode>
    <SamplePresentationToolbarPlugin {...{
      pluginUuid: uuid,
      pluginName,
    }}
    />
  </React.StrictMode>,
);
