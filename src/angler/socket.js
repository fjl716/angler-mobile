const defaultCallback = (socket) => {
  socket.onmessage = (message, dispatch) => {
    let msg = JSON.parse(message.data);
    dispatch({
      type: msg.event.replace('.','/'),
      payload: msg.data
    });
  };
};
let socket = null;
let dispatch = null;
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
      return (msg) => {
        return (action) => {
          if (action.isSend) {
            const sendObj = {
              event: action.type.replace('/','.'),
              data: action.payload
            };
            socket.send(JSON.stringify(sendObj));
          }
        };
      };
    }
  },
}