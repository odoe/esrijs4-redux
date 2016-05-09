import { LOAD_MAP } from '../constants/app';
import WebMap from 'esri/WebMap';

const initialState = {
  webmap: undefined,
  webmapid: undefined
};

function toWebMap(webmapid) {
  return new WebMap({
    portalItem: { id: webmapid }
  });
}

function makeOptions({ webmapid }) {
  return { webmap: toWebMap(webmapid) };
}

function webmap(state = undefined, { type, data }) {
  switch(type) {
    case LOAD_MAP:
        return toWebMap(data.webmapid)
    default:
      return state;
  }
}

function webmapid (state = undefined, { type, data }) {
  switch(type) {
    case LOAD_MAP:
        return state === data.webmapid ? state : data.webmapid;
    default:
      return state;
  }
}

export default function reducer(state = initialState, action) {
  return {
    webmap: webmap(state.webmap, action),
    webmapid: webmapid(state.webmapid, action)
  };
}
