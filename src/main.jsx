import React from 'react';
import ReactDOM from 'react-dom';

import WebMapView from './components/webmap';
import Info from './components/info';

let node = document.getElementById('app-container');

ReactDOM.render(
  <div>
    <Info/>
    <WebMapView webmapid='e691172598f04ea8881cd2a4adaa45ba'/>
  </div>,
  node
);
