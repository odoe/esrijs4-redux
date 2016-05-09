define(['exports', 'dojo/topic', 'esri/core/Accessor'], function (exports, _topic, _Accessor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Accessor2 = _interopRequireDefault(_Accessor);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var BaseStore = _Accessor2.default.createSubclass({
    properties: {
      signals: Array,
      state: {}
    },

    constructor: function constructor(props) {
      this.signals = [];
      this.state = undefined;
    },
    dispatch: function dispatch(action) {
      var type = action.type;
      if (!type) {
        throw new Error('You must define an action "type" to dispatch');
      }
      var payload = {};
      Object.keys(action).filter(function (key) {
        return key !== 'type';
      }).map(function (key) {
        payload[key] = action[key];
      });
      (0, _topic.publish)(type, payload);
    },
    listen: function listen(callback) {
      var signal = this.watch('state', callback);
      this.signals[callback] = signal;
      return function unsubscribe() {
        signal.remove();
      };
    },
    unlisten: function unlisten(callback) {
      var signal = this.signals[callback];
      if (signal) {
        signal.remove();
      }
    },
    getState: function getState() {
      return this.state;
    }
  });

  exports.default = BaseStore;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9fYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHQSxNQUFNLFlBQVksbUJBQVMsY0FBVCxDQUF3QjtBQUN4QyxnQkFBWTtBQUNWLGVBQVMsS0FEQztBQUVWLGFBQU87QUFGRyxLQUQ0Qjs7QUFNeEMsZUFOd0MsdUJBTTVCLEtBTjRCLEVBTXJCO0FBQ2pCLFdBQUssT0FBTCxHQUFlLEVBQWY7QUFDQSxXQUFLLEtBQUwsR0FBYSxTQUFiO0FBQ0QsS0FUdUM7QUFXeEMsWUFYd0Msb0JBVy9CLE1BWCtCLEVBV3ZCO0FBQ2YsVUFBSSxPQUFPLE9BQU8sSUFBbEI7QUFDQSxVQUFJLENBQUMsSUFBTCxFQUFXO0FBQ1QsY0FBTSxJQUFJLEtBQUosQ0FBVSw4Q0FBVixDQUFOO0FBQ0Q7QUFDRCxVQUFJLFVBQVUsRUFBZDtBQUNBLGFBQU8sSUFBUCxDQUFZLE1BQVosRUFDRSxNQURGLENBQ1M7QUFBQSxlQUFPLFFBQVEsTUFBZjtBQUFBLE9BRFQsRUFFRSxHQUZGLENBRU0sZUFBTztBQUNULGdCQUFRLEdBQVIsSUFBZSxPQUFPLEdBQVAsQ0FBZjtBQUNILE9BSkQ7QUFLQSwwQkFBUSxJQUFSLEVBQWMsT0FBZDtBQUNELEtBdkJ1QztBQXlCeEMsVUF6QndDLGtCQXlCakMsUUF6QmlDLEVBeUJ2QjtBQUNmLFVBQUksU0FBUyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLFFBQXBCLENBQWI7QUFDQSxXQUFLLE9BQUwsQ0FBYSxRQUFiLElBQXlCLE1BQXpCO0FBQ0EsYUFBTyxTQUFTLFdBQVQsR0FBdUI7QUFDNUIsZUFBTyxNQUFQO0FBQ0QsT0FGRDtBQUdELEtBL0J1QztBQWlDeEMsWUFqQ3dDLG9CQWlDL0IsUUFqQytCLEVBaUNyQjtBQUNqQixVQUFJLFNBQVMsS0FBSyxPQUFMLENBQWEsUUFBYixDQUFiO0FBQ0EsVUFBSSxNQUFKLEVBQVk7QUFDVixlQUFPLE1BQVA7QUFDRDtBQUNGLEtBdEN1QztBQXdDeEMsWUF4Q3dDLHNCQXdDN0I7QUFDVCxhQUFPLEtBQUssS0FBWjtBQUNEO0FBMUN1QyxHQUF4QixDQUFsQjs7b0JBNkNlLFMiLCJmaWxlIjoic3RvcmVzL19iYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gJ2Rvam8vdG9waWMnO1xuaW1wb3J0IEFjY2Vzc29yIGZyb20gJ2VzcmkvY29yZS9BY2Nlc3Nvcic7XG5cbmNvbnN0IEJhc2VTdG9yZSA9IEFjY2Vzc29yLmNyZWF0ZVN1YmNsYXNzKHtcbiAgcHJvcGVydGllczoge1xuICAgIHNpZ25hbHM6IEFycmF5LFxuICAgIHN0YXRlOiB7fVxuICB9LFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5zaWduYWxzID0gW107XG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfSxcblxuICBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBsZXQgdHlwZSA9IGFjdGlvbi50eXBlO1xuICAgIGlmICghdHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBkZWZpbmUgYW4gYWN0aW9uIFwidHlwZVwiIHRvIGRpc3BhdGNoJyk7XG4gICAgfVxuICAgIGxldCBwYXlsb2FkID0ge307XG4gICAgT2JqZWN0LmtleXMoYWN0aW9uKS5cbiAgICAgIGZpbHRlcihrZXkgPT4ga2V5ICE9PSAndHlwZScpLlxuICAgICAgbWFwKGtleSA9PiB7XG4gICAgICAgIHBheWxvYWRba2V5XSA9IGFjdGlvbltrZXldO1xuICAgIH0pO1xuICAgIHB1Ymxpc2godHlwZSwgcGF5bG9hZCk7XG4gIH0sXG5cbiAgbGlzdGVuKGNhbGxiYWNrKSB7XG4gICAgbGV0IHNpZ25hbCA9IHRoaXMud2F0Y2goJ3N0YXRlJywgY2FsbGJhY2spO1xuICAgIHRoaXMuc2lnbmFsc1tjYWxsYmFja10gPSBzaWduYWw7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgc2lnbmFsLnJlbW92ZSgpO1xuICAgIH1cbiAgfSxcblxuICB1bmxpc3RlbihjYWxsYmFjaykge1xuICAgIGxldCBzaWduYWwgPSB0aGlzLnNpZ25hbHNbY2FsbGJhY2tdO1xuICAgIGlmIChzaWduYWwpIHtcbiAgICAgIHNpZ25hbC5yZW1vdmUoKTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlU3RvcmU7XG4iXX0=