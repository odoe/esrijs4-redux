import { VIEW_READY } from '../constants/app';

const initialState = {
  interacting: false,
  scale: 0,
  zoom: 0
};

function interacting(state = false, { type, data }) {
  switch (type) {
    case VIEW_READY:
      return data.interacting;
    default:
      return state;
  }
}

function scale(state = 0, { type, data }) {
  switch (type) {
    case VIEW_READY:
      return data.scale;
    default:
      return state;
  }
}

function zoom(state = 0, { type, data }) {
  switch (type) {
    case VIEW_READY:
      return data.zoom;
    default:
      return state;
  }
}

export default function reducer(state = initialState, action) {
  return {
    interacting: interacting(state.interacting, action),
    scale: scale(state.scale, action),
    zoom: zoom(state.zoom, action)
  };
}
