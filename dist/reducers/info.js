define(['exports', '../constants/app'], function (exports, _app) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = reducer;


  var initialState = {
    interacting: false,
    scale: 0,
    zoom: 0
  };

  function interacting() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
    var _ref = arguments[1];
    var type = _ref.type;
    var data = _ref.data;

    switch (type) {
      case _app.VIEW_READY:
        return data.interacting;
      default:
        return state;
    }
  }

  function scale() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var _ref2 = arguments[1];
    var type = _ref2.type;
    var data = _ref2.data;

    switch (type) {
      case _app.VIEW_READY:
        return data.scale;
      default:
        return state;
    }
  }

  function zoom() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var _ref3 = arguments[1];
    var type = _ref3.type;
    var data = _ref3.data;

    switch (type) {
      case _app.VIEW_READY:
        return data.zoom;
      default:
        return state;
    }
  }

  function reducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments[1];

    return {
      interacting: interacting(state.interacting, action),
      scale: scale(state.scale, action),
      zoom: zoom(state.zoom, action)
    };
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2luZm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O29CQW1Dd0IsTzs7O0FBakN4QixNQUFNLGVBQWU7QUFDbkIsaUJBQWEsS0FETTtBQUVuQixXQUFPLENBRlk7QUFHbkIsVUFBTTtBQUhhLEdBQXJCOztBQU1BLFdBQVMsV0FBVCxHQUFvRDtBQUFBLFFBQS9CLEtBQStCLHlEQUF2QixLQUF1QjtBQUFBO0FBQUEsUUFBZCxJQUFjLFFBQWQsSUFBYztBQUFBLFFBQVIsSUFBUSxRQUFSLElBQVE7O0FBQ2xELFlBQVEsSUFBUjtBQUNFO0FBQ0UsZUFBTyxLQUFLLFdBQVo7QUFDRjtBQUNFLGVBQU8sS0FBUDtBQUpKO0FBTUQ7O0FBRUQsV0FBUyxLQUFULEdBQTBDO0FBQUEsUUFBM0IsS0FBMkIseURBQW5CLENBQW1CO0FBQUE7QUFBQSxRQUFkLElBQWMsU0FBZCxJQUFjO0FBQUEsUUFBUixJQUFRLFNBQVIsSUFBUTs7QUFDeEMsWUFBUSxJQUFSO0FBQ0U7QUFDRSxlQUFPLEtBQUssS0FBWjtBQUNGO0FBQ0UsZUFBTyxLQUFQO0FBSko7QUFNRDs7QUFFRCxXQUFTLElBQVQsR0FBeUM7QUFBQSxRQUEzQixLQUEyQix5REFBbkIsQ0FBbUI7QUFBQTtBQUFBLFFBQWQsSUFBYyxTQUFkLElBQWM7QUFBQSxRQUFSLElBQVEsU0FBUixJQUFROztBQUN2QyxZQUFRLElBQVI7QUFDRTtBQUNFLGVBQU8sS0FBSyxJQUFaO0FBQ0Y7QUFDRSxlQUFPLEtBQVA7QUFKSjtBQU1EOztBQUVjLFdBQVMsT0FBVCxHQUErQztBQUFBLFFBQTlCLEtBQThCLHlEQUF0QixZQUFzQjtBQUFBLFFBQVIsTUFBUTs7QUFDNUQsV0FBTztBQUNMLG1CQUFhLFlBQVksTUFBTSxXQUFsQixFQUErQixNQUEvQixDQURSO0FBRUwsYUFBTyxNQUFNLE1BQU0sS0FBWixFQUFtQixNQUFuQixDQUZGO0FBR0wsWUFBTSxLQUFLLE1BQU0sSUFBWCxFQUFpQixNQUFqQjtBQUhELEtBQVA7QUFLRCIsImZpbGUiOiJyZWR1Y2Vycy9pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVklFV19SRUFEWSB9IGZyb20gJy4uL2NvbnN0YW50cy9hcHAnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGludGVyYWN0aW5nOiBmYWxzZSxcbiAgc2NhbGU6IDAsXG4gIHpvb206IDBcbn07XG5cbmZ1bmN0aW9uIGludGVyYWN0aW5nKHN0YXRlID0gZmFsc2UsIHsgdHlwZSwgZGF0YSB9KSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgVklFV19SRUFEWTpcbiAgICAgIHJldHVybiBkYXRhLmludGVyYWN0aW5nO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2NhbGUoc3RhdGUgPSAwLCB7IHR5cGUsIGRhdGEgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFZJRVdfUkVBRFk6XG4gICAgICByZXR1cm4gZGF0YS5zY2FsZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHpvb20oc3RhdGUgPSAwLCB7IHR5cGUsIGRhdGEgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFZJRVdfUkVBRFk6XG4gICAgICByZXR1cm4gZGF0YS56b29tO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHJldHVybiB7XG4gICAgaW50ZXJhY3Rpbmc6IGludGVyYWN0aW5nKHN0YXRlLmludGVyYWN0aW5nLCBhY3Rpb24pLFxuICAgIHNjYWxlOiBzY2FsZShzdGF0ZS5zY2FsZSwgYWN0aW9uKSxcbiAgICB6b29tOiB6b29tKHN0YXRlLnpvb20sIGFjdGlvbilcbiAgfTtcbn1cbiJdfQ==