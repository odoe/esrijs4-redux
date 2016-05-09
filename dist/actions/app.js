define(['exports', '../constants/app'], function (exports, _app) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.loadWebMap = loadWebMap;
  exports.viewReady = viewReady;
  function loadWebMap(webmapid) {
    return { type: _app.LOAD_MAP, webmapid: webmapid };
  }

  function viewReady(view) {
    return { type: _app.VIEW_READY, view: view };
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztVQUVnQixVLEdBQUEsVTtVQUlBLFMsR0FBQSxTO0FBSlQsV0FBUyxVQUFULENBQW9CLFFBQXBCLEVBQThCO0FBQ25DLFdBQU8sRUFBRSxtQkFBRixFQUFrQixrQkFBbEIsRUFBUDtBQUNEOztBQUVNLFdBQVMsU0FBVCxDQUFtQixJQUFuQixFQUF5QjtBQUM5QixXQUFPLEVBQUUscUJBQUYsRUFBb0IsVUFBcEIsRUFBUDtBQUNEIiwiZmlsZSI6ImFjdGlvbnMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTE9BRF9NQVAsIFZJRVdfUkVBRFkgfSBmcm9tICcuLi9jb25zdGFudHMvYXBwJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRXZWJNYXAod2VibWFwaWQpIHtcbiAgcmV0dXJuIHsgdHlwZTogTE9BRF9NQVAsIHdlYm1hcGlkIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aWV3UmVhZHkodmlldykge1xuICByZXR1cm4geyB0eXBlOiBWSUVXX1JFQURZLCB2aWV3IH07XG59XG5cbiJdfQ==