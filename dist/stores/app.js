define(['exports', 'dojo/topic', './_base', '../constants/app', '../reducers/app'], function (exports, _topic, _base, _app, _app2) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxNQUFNLGVBQWU7QUFDbkIsWUFBUSxTQURXO0FBRW5CLGNBQVU7QUFGUyxHQUFyQjs7TUFLTSxROzs7QUFDSix3QkFBYztBQUFBOztBQUFBOztBQUVaLFlBQUssS0FBTCxHQUFhLFlBQWI7QUFDQSwyQ0FBb0IsTUFBSyxJQUFMLENBQVUsSUFBVixPQUFwQjtBQUhZO0FBSWI7Ozs7MkJBRUksSSxFQUFNO0FBQ1QsYUFBSyxLQUFMLEdBQWEsbUJBQVEsS0FBSyxLQUFiLEVBQW9CLEVBQUUsbUJBQUYsRUFBa0IsVUFBbEIsRUFBcEIsQ0FBYjtBQUNEOzs7Ozs7b0JBR1ksSUFBSSxRQUFKLEUiLCJmaWxlIjoic3RvcmVzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gJ2Rvam8vdG9waWMnO1xuXG5pbXBvcnQgQmFzZVN0b3JlIGZyb20gJy4vX2Jhc2UnO1xuXG5pbXBvcnQgeyBMT0FEX01BUCB9IGZyb20gJy4uL2NvbnN0YW50cy9hcHAnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvYXBwJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB3ZWJtYXA6IHVuZGVmaW5lZCxcbiAgd2VibWFwaWQ6IHVuZGVmaW5lZFxufTtcblxuY2xhc3MgQXBwU3RvcmUgZXh0ZW5kcyBCYXNlU3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG4gICAgc3Vic2NyaWJlKExPQURfTUFQLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0KGRhdGEpIHtcbiAgICB0aGlzLnN0YXRlID0gcmVkdWNlcih0aGlzLnN0YXRlLCB7IHR5cGU6IExPQURfTUFQLCBkYXRhIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcHBTdG9yZSgpO1xuIl19