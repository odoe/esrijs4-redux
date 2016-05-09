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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9iYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUdBLE1BQU0sWUFBWSxtQkFBUyxjQUFULENBQXdCO0FBQ3hDLGdCQUFZO0FBQ1YsZUFBUyxLQURDO0FBRVYsYUFBTztBQUZHLEtBRDRCOztBQU14QyxlQU53Qyx1QkFNNUIsS0FONEIsRUFNckI7QUFDakIsV0FBSyxPQUFMLEdBQWUsRUFBZjtBQUNBLFdBQUssS0FBTCxHQUFhLFNBQWI7QUFDRCxLQVR1QztBQVd4QyxZQVh3QyxvQkFXL0IsTUFYK0IsRUFXdkI7QUFDZixVQUFJLE9BQU8sT0FBTyxJQUFsQjtBQUNBLFVBQUksQ0FBQyxJQUFMLEVBQVc7QUFDVCxjQUFNLElBQUksS0FBSixDQUFVLDhDQUFWLENBQU47QUFDRDtBQUNELFVBQUksVUFBVSxFQUFkO0FBQ0EsYUFBTyxJQUFQLENBQVksTUFBWixFQUNFLE1BREYsQ0FDUztBQUFBLGVBQU8sUUFBUSxNQUFmO0FBQUEsT0FEVCxFQUVFLEdBRkYsQ0FFTSxlQUFPO0FBQ1QsZ0JBQVEsR0FBUixJQUFlLE9BQU8sR0FBUCxDQUFmO0FBQ0gsT0FKRDtBQUtBLDBCQUFRLElBQVIsRUFBYyxPQUFkO0FBQ0QsS0F2QnVDO0FBeUJ4QyxVQXpCd0Msa0JBeUJqQyxRQXpCaUMsRUF5QnZCO0FBQ2YsVUFBSSxTQUFTLEtBQUssS0FBTCxDQUFXLE9BQVgsRUFBb0IsUUFBcEIsQ0FBYjtBQUNBLFdBQUssT0FBTCxDQUFhLFFBQWIsSUFBeUIsTUFBekI7QUFDQSxhQUFPLFNBQVMsV0FBVCxHQUF1QjtBQUM1QixlQUFPLE1BQVA7QUFDRCxPQUZEO0FBR0QsS0EvQnVDO0FBaUN4QyxZQWpDd0Msb0JBaUMvQixRQWpDK0IsRUFpQ3JCO0FBQ2pCLFVBQUksU0FBUyxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQWI7QUFDQSxVQUFJLE1BQUosRUFBWTtBQUNWLGVBQU8sTUFBUDtBQUNEO0FBQ0YsS0F0Q3VDO0FBd0N4QyxZQXhDd0Msc0JBd0M3QjtBQUNULGFBQU8sS0FBSyxLQUFaO0FBQ0Q7QUExQ3VDLEdBQXhCLENBQWxCOztvQkE2Q2UsUyIsImZpbGUiOiJzdG9yZXMvYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tICdkb2pvL3RvcGljJztcbmltcG9ydCBBY2Nlc3NvciBmcm9tICdlc3JpL2NvcmUvQWNjZXNzb3InO1xuXG5jb25zdCBCYXNlU3RvcmUgPSBBY2Nlc3Nvci5jcmVhdGVTdWJjbGFzcyh7XG4gIHByb3BlcnRpZXM6IHtcbiAgICBzaWduYWxzOiBBcnJheSxcbiAgICBzdGF0ZToge31cbiAgfSxcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMuc2lnbmFscyA9IFtdO1xuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7XG4gIH0sXG5cbiAgZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgbGV0IHR5cGUgPSBhY3Rpb24udHlwZTtcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgZGVmaW5lIGFuIGFjdGlvbiBcInR5cGVcIiB0byBkaXNwYXRjaCcpO1xuICAgIH1cbiAgICBsZXQgcGF5bG9hZCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGFjdGlvbikuXG4gICAgICBmaWx0ZXIoa2V5ID0+IGtleSAhPT0gJ3R5cGUnKS5cbiAgICAgIG1hcChrZXkgPT4ge1xuICAgICAgICBwYXlsb2FkW2tleV0gPSBhY3Rpb25ba2V5XTtcbiAgICB9KTtcbiAgICBwdWJsaXNoKHR5cGUsIHBheWxvYWQpO1xuICB9LFxuXG4gIGxpc3RlbihjYWxsYmFjaykge1xuICAgIGxldCBzaWduYWwgPSB0aGlzLndhdGNoKCdzdGF0ZScsIGNhbGxiYWNrKTtcbiAgICB0aGlzLnNpZ25hbHNbY2FsbGJhY2tdID0gc2lnbmFsO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIHNpZ25hbC5yZW1vdmUoKTtcbiAgICB9XG4gIH0sXG5cbiAgdW5saXN0ZW4oY2FsbGJhY2spIHtcbiAgICBsZXQgc2lnbmFsID0gdGhpcy5zaWduYWxzW2NhbGxiYWNrXTtcbiAgICBpZiAoc2lnbmFsKSB7XG4gICAgICBzaWduYWwucmVtb3ZlKCk7XG4gICAgfVxuICB9LFxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZVN0b3JlO1xuIl19