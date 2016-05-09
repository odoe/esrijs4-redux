import React, { Component, PropTypes } from 'react';
import SceneView from 'esri/views/SceneView';
import { loadWebMap, viewReady } from '../actions/app';
import store from '../stores/app';

class WebMapView extends Component {
  static propTypes = {
    webmapid: PropTypes.string.isRequired
  };

  componentDidMount() {
    store.listen(this.mapLoaded.bind(this));
    store.dispatch(loadWebMap(this.props.webmapid));
  }

  componentWillUnMount() {
    store.unlisten(this.mapLoad.bind(this));
  }

  mapLoaded() {
    let { webmap } = store.getState();
    let view = new SceneView({
      container: this.refs.mapView,
      map: webmap
    });
    view.watch('interacting, scale, zoom', () => {
      store.dispatch(viewReady(view));
    });
  }

  render() {
    return (
      <div className="mapView" ref="mapView"></div>
    );
  }
}

export default WebMapView;
