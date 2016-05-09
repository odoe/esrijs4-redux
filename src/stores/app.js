import { subscribe } from 'dojo/topic';

import BaseStore from './_base';

import { LOAD_MAP, VIEW_READY } from '../constants/app';
import reducer from '../reducers/app';

const initialState = {
  webmap: undefined,
  webmapid: undefined
};

class AppStore extends BaseStore {
  constructor() {
    super();
    this.state = initialState;
    subscribe(LOAD_MAP, this.init.bind(this));
  }

  init(data) {
    this.state = reducer(this.state, { type: LOAD_MAP, data });
  }
}

export default new AppStore();
