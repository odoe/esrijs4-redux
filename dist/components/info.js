define(['exports', 'react', '../stores/info'], function (exports, _react, _info) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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

  var Info = function (_Component) {
    _inherits(Info, _Component);

    function Info() {
      var _Object$getPrototypeO;

      var _temp, _this, _ret;

      _classCallCheck(this, Info);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Info)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
        interacting: false,
        scale: 0,
        zoom: 0
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Info, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        _info2.default.listen(this.update.bind(this));
      }
    }, {
      key: 'componentWillUnMount',
      value: function componentWillUnMount() {
        _info2.default.unlisten(this.update.bind(this));
      }
    }, {
      key: 'update',
      value: function update() {
        this.setState(_info2.default.getState());
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'list-items' },
          _react2.default.createElement(
            'p',
            null,
            'interacting: ',
            String(this.state.interacting)
          ),
          _react2.default.createElement(
            'p',
            null,
            'scale: ',
            (this.state.scale || 0).toFixed(2)
          ),
          _react2.default.createElement(
            'p',
            null,
            'zoom: ',
            (this.state.zoom || 0).toFixed(2)
          )
        );
      }
    }]);

    return Info;
  }(_react.Component);

  exports.default = Info;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW5mby5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFHTSxJOzs7Ozs7Ozs7Ozs7OztvTUFDSixLLEdBQVE7QUFDTixxQkFBYSxLQURQO0FBRU4sZUFBTyxDQUZEO0FBR04sY0FBTTtBQUhBLE87Ozs7OzBDQU1ZO0FBQ2xCLHVCQUFNLE1BQU4sQ0FBYSxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQWI7QUFDRDs7OzZDQUVzQjtBQUNyQix1QkFBTSxRQUFOLENBQWUsS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixJQUFqQixDQUFmO0FBQ0Q7OzsrQkFFUTtBQUNQLGFBQUssUUFBTCxDQUFjLGVBQU0sUUFBTixFQUFkO0FBQ0Q7OzsrQkFFUTtBQUNQLGVBQ0U7QUFBQTtVQUFBLEVBQUssV0FBVSxZQUFmO1VBQ0U7QUFBQTtZQUFBO1lBQUE7WUFBaUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxXQUFsQjtBQUFqQixXQURGO1VBRUU7QUFBQTtZQUFBO1lBQUE7WUFBVyxDQUFDLEtBQUssS0FBTCxDQUFXLEtBQVgsSUFBb0IsQ0FBckIsRUFBd0IsT0FBeEIsQ0FBZ0MsQ0FBaEM7QUFBWCxXQUZGO1VBR0U7QUFBQTtZQUFBO1lBQUE7WUFBVSxDQUFDLEtBQUssS0FBTCxDQUFXLElBQVgsSUFBbUIsQ0FBcEIsRUFBdUIsT0FBdkIsQ0FBK0IsQ0FBL0I7QUFBVjtBQUhGLFNBREY7QUFPRDs7Ozs7O29CQUdZLEkiLCJmaWxlIjoiY29tcG9uZW50cy9pbmZvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmVzL2luZm8nO1xuXG5jbGFzcyBJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaW50ZXJhY3Rpbmc6IGZhbHNlLFxuICAgIHNjYWxlOiAwLFxuICAgIHpvb206IDBcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdG9yZS5saXN0ZW4odGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5Nb3VudCgpIHtcbiAgICBzdG9yZS51bmxpc3Rlbih0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0b3JlLmdldFN0YXRlKCkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbXNcIj5cbiAgICAgICAgPHA+aW50ZXJhY3Rpbmc6IHtTdHJpbmcodGhpcy5zdGF0ZS5pbnRlcmFjdGluZyl9PC9wPlxuICAgICAgICA8cD5zY2FsZTogeyh0aGlzLnN0YXRlLnNjYWxlIHx8IDApLnRvRml4ZWQoMil9PC9wPlxuICAgICAgICA8cD56b29tOiB7KHRoaXMuc3RhdGUuem9vbSB8fCAwKS50b0ZpeGVkKDIpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5mbztcbiJdfQ==