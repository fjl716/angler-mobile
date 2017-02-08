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
      //console.log(arguments);
      const proxy = {};
      proxy.id = result.id;
      proxy.func = name;
      proxy.params = [];
      for (let name in arguments) {
        proxy.params.push(arguments[name]);
      }
      let callback = proxy.params[proxy.params.length - 1];
      proxy.callId = `${Math.random()}`.substr(2);
      callbackMap[proxy.callId] = callback;
      proxyCall(proxy);
    }
  }
  return result;
}

export default {
  objectMap,
  bindSocket: (socket) => {
    socket.send(JSON.stringify({
      event: 'remoting.get',
    }));
    proxyCall = (obj) => {
      socket.send(JSON.stringify({
        event: 'remoting.invoke',
        data: obj
      }));
    };
    socket.onmessage = (message, dispatch) => {
      let event = JSON.parse(message.data);
      switch (event.event) {
        case 'remoting.set':
          for (let name in event.data) {
            objectMap[name] = createObject(event.data[name]);
          }
          let a = null;
          for (let name in objectMap) {
            a = objectMap[name];
          }


          // a.sum(1,2,3,(result)=>{
          //   console.log(result)
          // });
          break;
        case 'remoting.result':
          // console.log(event.data);
          callbackMap[event.data.callId](event.data.data);
          delete callbackMap[event.data.callId];
          break;
        default:
          dispatch(event);
          break;
      }
    };
  },
}
