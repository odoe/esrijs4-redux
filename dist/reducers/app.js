define(['exports', '../constants/app', 'esri/WebMap'], function (exports, _app, _WebMap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = reducer;

  var _WebMap2 = _interopRequireDefault(_WebMap);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var initialState = {
    webmap: undefined,
    webmapid: undefined
  };

  function toWebMap(webmapid) {
    return new _WebMap2.default({
      portalItem: { id: webmapid }
    });
  }

  function makeOptions(_ref) {
    var webmapid = _ref.webmapid;

    return { webmap: toWebMap(webmapid) };
  }

  function webmap() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
    var _ref2 = arguments[1];
    var type = _ref2.type;
    var data = _ref2.data;

    switch (type) {
      case _app.LOAD_MAP:
        return toWebMap(data.webmapid);
      default:
        return state;
    }
  }

  function webmapid() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
    var _ref3 = arguments[1];
    var type = _ref3.type;
    var data = _ref3.data;

    switch (type) {
      case _app.LOAD_MAP:
        return state === data.webmapid ? state : data.webmapid;
      default:
        return state;
    }
  }

  function reducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments[1];

    return {
      webmap: webmap(state.webmap, action),
      webmapid: webmapid(state.webmapid, action)
    };
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBb0N3QixPOzs7Ozs7Ozs7O0FBakN4QixNQUFNLGVBQWU7QUFDbkIsWUFBUSxTQURXO0FBRW5CLGNBQVU7QUFGUyxHQUFyQjs7QUFLQSxXQUFTLFFBQVQsQ0FBa0IsUUFBbEIsRUFBNEI7QUFDMUIsV0FBTyxxQkFBVztBQUNoQixrQkFBWSxFQUFFLElBQUksUUFBTjtBQURJLEtBQVgsQ0FBUDtBQUdEOztBQUVELFdBQVMsV0FBVCxPQUFtQztBQUFBLFFBQVosUUFBWSxRQUFaLFFBQVk7O0FBQ2pDLFdBQU8sRUFBRSxRQUFRLFNBQVMsUUFBVCxDQUFWLEVBQVA7QUFDRDs7QUFFRCxXQUFTLE1BQVQsR0FBbUQ7QUFBQSxRQUFuQyxLQUFtQyx5REFBM0IsU0FBMkI7QUFBQTtBQUFBLFFBQWQsSUFBYyxTQUFkLElBQWM7QUFBQSxRQUFSLElBQVEsU0FBUixJQUFROztBQUNqRCxZQUFPLElBQVA7QUFDRTtBQUNJLGVBQU8sU0FBUyxLQUFLLFFBQWQsQ0FBUDtBQUNKO0FBQ0UsZUFBTyxLQUFQO0FBSko7QUFNRDs7QUFFRCxXQUFTLFFBQVQsR0FBc0Q7QUFBQSxRQUFuQyxLQUFtQyx5REFBM0IsU0FBMkI7QUFBQTtBQUFBLFFBQWQsSUFBYyxTQUFkLElBQWM7QUFBQSxRQUFSLElBQVEsU0FBUixJQUFROztBQUNwRCxZQUFPLElBQVA7QUFDRTtBQUNJLGVBQU8sVUFBVSxLQUFLLFFBQWYsR0FBMEIsS0FBMUIsR0FBa0MsS0FBSyxRQUE5QztBQUNKO0FBQ0UsZUFBTyxLQUFQO0FBSko7QUFNRDs7QUFFYyxXQUFTLE9BQVQsR0FBK0M7QUFBQSxRQUE5QixLQUE4Qix5REFBdEIsWUFBc0I7QUFBQSxRQUFSLE1BQVE7O0FBQzVELFdBQU87QUFDTCxjQUFRLE9BQU8sTUFBTSxNQUFiLEVBQXFCLE1BQXJCLENBREg7QUFFTCxnQkFBVSxTQUFTLE1BQU0sUUFBZixFQUF5QixNQUF6QjtBQUZMLEtBQVA7QUFJRCIsImZpbGUiOiJyZWR1Y2Vycy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMT0FEX01BUCB9IGZyb20gJy4uL2NvbnN0YW50cy9hcHAnO1xuaW1wb3J0IFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgd2VibWFwOiB1bmRlZmluZWQsXG4gIHdlYm1hcGlkOiB1bmRlZmluZWRcbn07XG5cbmZ1bmN0aW9uIHRvV2ViTWFwKHdlYm1hcGlkKSB7XG4gIHJldHVybiBuZXcgV2ViTWFwKHtcbiAgICBwb3J0YWxJdGVtOiB7IGlkOiB3ZWJtYXBpZCB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlT3B0aW9ucyh7IHdlYm1hcGlkIH0pIHtcbiAgcmV0dXJuIHsgd2VibWFwOiB0b1dlYk1hcCh3ZWJtYXBpZCkgfTtcbn1cblxuZnVuY3Rpb24gd2VibWFwKHN0YXRlID0gdW5kZWZpbmVkLCB7IHR5cGUsIGRhdGEgfSkge1xuICBzd2l0Y2godHlwZSkge1xuICAgIGNhc2UgTE9BRF9NQVA6XG4gICAgICAgIHJldHVybiB0b1dlYk1hcChkYXRhLndlYm1hcGlkKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2VibWFwaWQgKHN0YXRlID0gdW5kZWZpbmVkLCB7IHR5cGUsIGRhdGEgfSkge1xuICBzd2l0Y2godHlwZSkge1xuICAgIGNhc2UgTE9BRF9NQVA6XG4gICAgICAgIHJldHVybiBzdGF0ZSA9PT0gZGF0YS53ZWJtYXBpZCA/IHN0YXRlIDogZGF0YS53ZWJtYXBpZDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICByZXR1cm4ge1xuICAgIHdlYm1hcDogd2VibWFwKHN0YXRlLndlYm1hcCwgYWN0aW9uKSxcbiAgICB3ZWJtYXBpZDogd2VibWFwaWQoc3RhdGUud2VibWFwaWQsIGFjdGlvbilcbiAgfTtcbn1cbiJdfQ==