import React, { Component } from 'react';
import store from '../stores/info';

class Info extends Component {
  state = {
    interacting: false,
    scale: 0,
    zoom: 0
  };

  componentDidMount() {
    store.listen(this.update.bind(this));
  }

  componentWillUnMount() {
    store.unlisten(this.update.bind(this));
  }

  update() {
    this.setState(store.getState());
  }

  render() {
    return (
      <div className="list-items">
        <p>interacting: {String(this.state.interacting)}</p>
        <p>scale: {(this.state.scale || 0).toFixed(2)}</p>
        <p>zoom: {(this.state.zoom || 0).toFixed(2)}</p>
      </div>
    );
  }
}

export default Info;
