let callbackMap = {};

const objectMap = {};

let dispatch = null;

function create(obj) {
  return new Proxy(obj, {
    get: function (target, key, receiver) {
      const original = Reflect.get(target, key, receiver);
      if (original) {
        return original
      }
      else {
        const __ID__ = Reflect.get(target, '__ID__', receiver);
        let handler = {
          apply: function (target, thisBinding, args) {
            const callback = args.pop();
            const json = {
              __CALL_ID__: `${Math.random()}`.substr(2),
              __ID__: __ID__,
              method: key,
              params: args
            };
            Reflect.set(callbackMap, json.__CALL_ID__, callback);
            dispatch({type: 'remoting/invoke', payload: json, isSend: true});
          }
        };
        return new Proxy(() => {
        }, handler);
      }
    },
  });
}

export default {
  namespace: 'remoting',
  objectMap,
  state: {
    list: [],
  },

  subscriptions: {
    setup(obj) {
      dispatch = obj.dispatch;
    },
  },

  getProxys(){
    dispatch({type: 'remoting', payload: ['1'], isSend: true});
  },

  effects: {
    *invoke(){
    }
  },

  reducers: {
    invoke(state, action){
      return state
    },
    set(state, action){
      for (let name in action.payload) {
        Reflect.set(objectMap, name, create(action.payload[name]));
      }
      return state
    },
    result(state, action) {
      callbackMap[action.payload.__CALL_ID__](action.payload.data);
      delete callbackMap[action.payload.__CALL_ID__];
      return state;
    },
  },
}
