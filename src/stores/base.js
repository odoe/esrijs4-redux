import { publish } from 'dojo/topic';
import Accessor from 'esri/core/Accessor';

const BaseStore = Accessor.createSubclass({
  properties: {
    signals: Array,
    state: {}
  },

  constructor(props) {
    this.signals = [];
    this.state = undefined;
  },

  dispatch(action) {
    let type = action.type;
    if (!type) {
      throw new Error('You must define an action "type" to dispatch');
    }
    let payload = {};
    Object.keys(action).
      filter(key => key !== 'type').
      map(key => {
        payload[key] = action[key];
    });
    publish(type, payload);
  },

  listen(callback) {
    let signal = this.watch('state', callback);
    this.signals[callback] = signal;
    return function unsubscribe() {
      signal.remove();
    }
  },

  unlisten(callback) {
    let signal = this.signals[callback];
    if (signal) {
      signal.remove();
    }
  },

  getState() {
    return this.state;
  }
});

export default BaseStore;
