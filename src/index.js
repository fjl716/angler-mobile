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
