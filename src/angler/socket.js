let socket = null;
let dispatch = null;

const defaultCallback = (socket) => {
  socket.onmessage = (message) => {
    let msg = JSON.parse(message.data);
    dispatch({
      type: msg.event.replace('.','/'),
      payload: msg.data
    });
  };
};
export default {
  open(url, app, callback){
    dispatch = app._store.dispatch;
    if (!callback)
      callback = defaultCallback;
    socket = new WebSocket(url);
    socket.onclose = function (event) {
      dispatch({type: 'close'});
    };
    socket.onopen = function (event) {
      dispatch({type: 'open', payload: {socket: socket}});
      callback(socket, dispatch);
    };
  },
  socketSender: {
    onAction: () => {
      return (basedispatch) => {
        return (action) => {
          if (action.isSend) {
            const sendObj = {
              event: action.type.replace('/','.'),
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