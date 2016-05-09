define(['exports', 'dojo/topic', './_base', '../constants/app', '../reducers/info'], function (exports, _topic, _base, _app, _info) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _base2 = _interopRequireDefault(_base);

  var _info2 = _interopRequireDefault(_info);

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
    interacting: false,
    scale: 0,
    zoom: 0
  };

  var InfoStore = function (_BaseStore) {
    _inherits(InfoStore, _BaseStore);

    function InfoStore() {
      _classCallCheck(this, InfoStore);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InfoStore).call(this));

      _this.state = initialState;
      (0, _topic.subscribe)(_app.VIEW_READY, _this.init.bind(_this));
      return _this;
    }

    _createClass(InfoStore, [{
      key: 'init',
      value: function init(_ref) {
        var data = _ref.view;

        this.state = (0, _info2.default)(this.state, { type: _app.VIEW_READY, data: data });
      }
    }]);

    return InfoStore;
  }(_base2.default);

  exports.default = new InfoStore();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9pbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsTUFBTSxlQUFlO0FBQ25CLGlCQUFhLEtBRE07QUFFbkIsV0FBTyxDQUZZO0FBR25CLFVBQU07QUFIYSxHQUFyQjs7TUFNTSxTOzs7QUFDSix5QkFBYztBQUFBOztBQUFBOztBQUVaLFlBQUssS0FBTCxHQUFhLFlBQWI7QUFDQSw2Q0FBc0IsTUFBSyxJQUFMLENBQVUsSUFBVixPQUF0QjtBQUhZO0FBSWI7Ozs7aUNBRW9CO0FBQUEsWUFBUixJQUFRLFFBQWQsSUFBYzs7QUFDbkIsYUFBSyxLQUFMLEdBQWEsb0JBQVEsS0FBSyxLQUFiLEVBQW9CLEVBQUUscUJBQUYsRUFBb0IsVUFBcEIsRUFBcEIsQ0FBYjtBQUNEOzs7Ozs7b0JBR1ksSUFBSSxTQUFKLEUiLCJmaWxlIjoic3RvcmVzL2luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tICdkb2pvL3RvcGljJztcblxuaW1wb3J0IEJhc2VTdG9yZSBmcm9tICcuL19iYXNlJztcblxuaW1wb3J0IHsgVklFV19SRUFEWSB9IGZyb20gJy4uL2NvbnN0YW50cy9hcHAnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvaW5mbyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaW50ZXJhY3Rpbmc6IGZhbHNlLFxuICBzY2FsZTogMCxcbiAgem9vbTogMFxufTtcblxuY2xhc3MgSW5mb1N0b3JlIGV4dGVuZHMgQmFzZVN0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgIHN1YnNjcmliZShWSUVXX1JFQURZLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0KHsgdmlldzogZGF0YSB9KSB7XG4gICAgdGhpcy5zdGF0ZSA9IHJlZHVjZXIodGhpcy5zdGF0ZSwgeyB0eXBlOiBWSUVXX1JFQURZLCBkYXRhIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJbmZvU3RvcmUoKTtcbiJdfQ==