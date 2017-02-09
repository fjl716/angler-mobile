let callbackMap = {};
let objectMap = {};

let proxyCall = (obj)=> {
  console.log(obj);
};

function createObject(proxy) {
  const result = {};
  Object.assign(result, proxy.object);
  for (let name in proxy.functions) {
    result[name] = function () {
      const proxy = {};
      proxy.id = result.id;
      proxy.func = name;
      proxy.params = Object.values(arguments);
      let callback = proxy.params[proxy.params.length - 1];
      proxy.callId = `${Math.random()}`.substr(2);
      callbackMap[proxy.callId] = callback;
      proxy.params.pop();
      proxyCall(proxy);
    }
  }
  return result;
}

export default {
  namespace: 'remoting',
  objectMap,
  state: {
    list: [],
  },

  subscriptions: {
    setup({dispatch, history}) {

    },
  },

  getProxys({dispatch}){
    dispatch({type: 'remoting/get', isSend: true});

    proxyCall = (obj) => {
      dispatch({type: 'remoting/invoke', payload: obj, isSend: true});
    }
  },

  effects: {},

  reducers: {
    set(state, action){
      for (let name in action.payload) {
        objectMap[name] = createObject(action.payload[name]);
      }
      return state
    },
    result(state, action) {
      callbackMap[action.payload.callId](action.payload.data);
      delete callbackMap[action.payload.callId];
      return state;
    },
  },
}
