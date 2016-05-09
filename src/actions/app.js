import { LOAD_MAP, VIEW_READY } from '../constants/app';

export function loadWebMap(webmapid) {
  return { type: LOAD_MAP, webmapid };
}

export function viewReady(view) {
  return { type: VIEW_READY, view };
}

