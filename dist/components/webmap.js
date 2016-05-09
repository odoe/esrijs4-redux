define(['exports', 'react', 'esri/views/SceneView', '../actions/app', '../stores/app'], function (exports, _react, _SceneView, _app, _app2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _SceneView2 = _interopRequireDefault(_SceneView);

  var _app3 = _interopRequireDefault(_app2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var WebMapView = function (_Component) {
    _inherits(WebMapView, _Component);

    function WebMapView() {
      _classCallCheck(this, WebMapView);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(WebMapView).apply(this, arguments));
    }

    _createClass(WebMapView, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        _app3.default.listen(this.mapLoaded.bind(this));
        _app3.default.dispatch((0, _app.loadWebMap)(this.props.webmapid));
      }
    }, {
      key: 'componentWillUnMount',
      value: function componentWillUnMount() {
        _app3.default.unlisten(this.mapLoad.bind(this));
      }
    }, {
      key: 'mapLoaded',
      value: function mapLoaded() {
        var _store$getState = _app3.default.getState();

        var webmap = _store$getState.webmap;

        var view = new _SceneView2.default({
          container: this.refs.mapView,
          map: webmap
        });
        view.watch('interacting, scale, zoom', function () {
          _app3.default.dispatch((0, _app.viewReady)(view));
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement('div', { className: 'mapView', ref: 'mapView' });
      }
    }]);

    return WebMapView;
  }(_react.Component);

  WebMapView.propTypes = {
    webmapid: _react.PropTypes.string.isRequired
  };
  exports.default = WebMapView;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2VibWFwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BS00sVTs7Ozs7Ozs7Ozs7MENBS2dCO0FBQ2xCLHNCQUFNLE1BQU4sQ0FBYSxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLElBQXBCLENBQWI7QUFDQSxzQkFBTSxRQUFOLENBQWUscUJBQVcsS0FBSyxLQUFMLENBQVcsUUFBdEIsQ0FBZjtBQUNEOzs7NkNBRXNCO0FBQ3JCLHNCQUFNLFFBQU4sQ0FBZSxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLElBQWxCLENBQWY7QUFDRDs7O2tDQUVXO0FBQUEsOEJBQ08sY0FBTSxRQUFOLEVBRFA7O0FBQUEsWUFDSixNQURJLG1CQUNKLE1BREk7O0FBRVYsWUFBSSxPQUFPLHdCQUFjO0FBQ3ZCLHFCQUFXLEtBQUssSUFBTCxDQUFVLE9BREU7QUFFdkIsZUFBSztBQUZrQixTQUFkLENBQVg7QUFJQSxhQUFLLEtBQUwsQ0FBVywwQkFBWCxFQUF1QyxZQUFNO0FBQzNDLHdCQUFNLFFBQU4sQ0FBZSxvQkFBVSxJQUFWLENBQWY7QUFDRCxTQUZEO0FBR0Q7OzsrQkFFUTtBQUNQLGVBQ0UsdUNBQUssV0FBVSxTQUFmLEVBQXlCLEtBQUksU0FBN0IsR0FERjtBQUdEOzs7Ozs7QUE3QkcsWSxDQUNHLFMsR0FBWTtBQUNqQixjQUFVLGlCQUFVLE1BQVYsQ0FBaUI7QUFEVixHO29CQStCTixVIiwiZmlsZSI6ImNvbXBvbmVudHMvd2VibWFwLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTY2VuZVZpZXcgZnJvbSAnZXNyaS92aWV3cy9TY2VuZVZpZXcnO1xuaW1wb3J0IHsgbG9hZFdlYk1hcCwgdmlld1JlYWR5IH0gZnJvbSAnLi4vYWN0aW9ucy9hcHAnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3Jlcy9hcHAnO1xuXG5jbGFzcyBXZWJNYXBWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB3ZWJtYXBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3RvcmUubGlzdGVuKHRoaXMubWFwTG9hZGVkLmJpbmQodGhpcykpO1xuICAgIHN0b3JlLmRpc3BhdGNoKGxvYWRXZWJNYXAodGhpcy5wcm9wcy53ZWJtYXBpZCkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVuTW91bnQoKSB7XG4gICAgc3RvcmUudW5saXN0ZW4odGhpcy5tYXBMb2FkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgbWFwTG9hZGVkKCkge1xuICAgIGxldCB7IHdlYm1hcCB9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBsZXQgdmlldyA9IG5ldyBTY2VuZVZpZXcoe1xuICAgICAgY29udGFpbmVyOiB0aGlzLnJlZnMubWFwVmlldyxcbiAgICAgIG1hcDogd2VibWFwXG4gICAgfSk7XG4gICAgdmlldy53YXRjaCgnaW50ZXJhY3RpbmcsIHNjYWxlLCB6b29tJywgKCkgPT4ge1xuICAgICAgc3RvcmUuZGlzcGF0Y2godmlld1JlYWR5KHZpZXcpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXBWaWV3XCIgcmVmPVwibWFwVmlld1wiPjwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2ViTWFwVmlldztcbiJdfQ==