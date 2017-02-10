import './index.html';
import './index.less';
import dva from 'dva';
import socket from './angler/socket';
import remoting from './angler/remoting';
// 1. Initialize
const app = dva();

// 2. Plugins
app.use(socket.socketSender);

// 3. Model
app.model(remoting);
app.model(require('./models/user'));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

socket.open('ws://localhost:8080',app,remoting.getProxys);
// socket.open('ws://localhost:8080',app);


// let o = {};
//
// Reflect.set(o, 'aaa', 123);
//
// console.log(o);
//
//
//
//
// let proxy = createProxy({
//   __ID__:123,
// });
//
// class Server {
//   constructor(__ID__, count) {
//     this.__ID__ = __ID__;
//     this.count = count;
//   }
//
//   test(a, b, c) {
//     return a + b + c + this.count;
//   }
// }
//
// let serverObj = new Server(123,12);
// // console.log(serverObj.test(1,2,3));
//
// //console.log(proxy.count);
// proxy.test(1,2,3,function (result) {
//   console.log(result);
// });
