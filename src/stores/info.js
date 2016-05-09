import { subscribe } from 'dojo/topic';

import BaseStore from './_base';

import { VIEW_READY } from '../constants/app';
import reducer from '../reducers/info';

const initialState = {
  interacting: false,
  scale: 0,
  zoom: 0
};

class InfoStore extends BaseStore {
  constructor() {
    super();
    this.state = initialState;
    subscribe(VIEW_READY, this.init.bind(this));
  }

  init({ view: data }) {
    this.state = reducer(this.state, { type: VIEW_READY, data });
  }
}

export default new InfoStore();
