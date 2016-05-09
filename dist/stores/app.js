define(['exports', 'dojo/topic', './base', '../constants/app', '../reducers/app'], function (exports, _topic, _base, _app, _app2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _base2 = _interopRequireDefault(_base);

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

  var initialState = {
    webmap: undefined,
    webmapid: undefined
  };

  var AppStore = function (_BaseStore) {
    _inherits(AppStore, _BaseStore);

    function AppStore() {
      _classCallCheck(this, AppStore);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppStore).call(this));

      _this.state = initialState;
      (0, _topic.subscribe)(_app.LOAD_MAP, _this.init.bind(_this));
      return _this;
    }

    _createClass(AppStore, [{
      key: 'init',
      value: function init(data) {
        this.state = (0, _app3.default)(this.state, { type: _app.LOAD_MAP, data: data });
      }
    }]);

    return AppStore;
  }(_base2.default);

  exports.default = new AppStore();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxNQUFNLGVBQWU7QUFDbkIsWUFBUSxTQURXO0FBRW5CLGNBQVU7QUFGUyxHQUFyQjs7TUFLTSxROzs7QUFDSix3QkFBYztBQUFBOztBQUFBOztBQUVaLFlBQUssS0FBTCxHQUFhLFlBQWI7QUFDQSwyQ0FBb0IsTUFBSyxJQUFMLENBQVUsSUFBVixPQUFwQjtBQUhZO0FBSWI7Ozs7MkJBRUksSSxFQUFNO0FBQ1QsYUFBSyxLQUFMLEdBQWEsbUJBQVEsS0FBSyxLQUFiLEVBQW9CLEVBQUUsbUJBQUYsRUFBa0IsVUFBbEIsRUFBcEIsQ0FBYjtBQUNEOzs7Ozs7b0JBR1ksSUFBSSxRQUFKLEUiLCJmaWxlIjoic3RvcmVzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gJ2Rvam8vdG9waWMnO1xuXG5pbXBvcnQgQmFzZVN0b3JlIGZyb20gJy4vYmFzZSc7XG5cbmltcG9ydCB7IExPQURfTUFQIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FwcCc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9hcHAnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHdlYm1hcDogdW5kZWZpbmVkLFxuICB3ZWJtYXBpZDogdW5kZWZpbmVkXG59O1xuXG5jbGFzcyBBcHBTdG9yZSBleHRlbmRzIEJhc2VTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICBzdWJzY3JpYmUoTE9BRF9NQVAsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGluaXQoZGF0YSkge1xuICAgIHRoaXMuc3RhdGUgPSByZWR1Y2VyKHRoaXMuc3RhdGUsIHsgdHlwZTogTE9BRF9NQVAsIGRhdGEgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwcFN0b3JlKCk7XG4iXX0=