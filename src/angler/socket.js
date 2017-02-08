let socket = null;
let dispatch = null;

export default {
  open(url, app, ...callback){
    dispatch = app._store.dispatch;
    socket = new WebSocket(url);
    socket.onclose = function (event) {
      dispatch({type: 'ws/close'});
    };
    socket.onopen = function (event) {
      callback.map(func=>func({socket, dispatch}));
      dispatch({type: 'ws/open', payload: {socket: socket}});
      socket.onmessage = (message) => {
        let msg = JSON.parse(message.data);
        dispatch({
          type: msg.event.replace('.', '/'),
          payload: msg.data
        });
      };
    };
  },
  socketSender: {
    onAction: () => {
      return (basedispatch) => {
        return (action) => {
          if (action.isSend) {
            const sendObj = {
              event: action.type.replace('/', '.'),
              data: action.payload
            };
            socket.send(JSON.stringify(sendObj));
          }
          basedispatch(action);
        };
      };
    }
  },
}