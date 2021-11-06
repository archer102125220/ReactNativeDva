
import Io from 'socket.io-client';
import api from './../apiConfig';
import { NODE_ENV } from 'react-native-dotenv';

const { socket: socketURL } = api;
const nodeEnv = NODE_ENV;

class Socket extends Io {
  constructor(props) {
    super(props);
    const log = (nodeEnv !== 'production');
    if (log) {
      this.on('connect', () => console.log('Socket is connected'));
      this.on('disconnect', () => console.log('Socket is disconnected'));
    }
  }

  eventInit = (events = []) => {
    events.forEach(({ name, event }) => {
      this[name + 'Send'] = (data = null) => this.emit(name, data);
      this.on(name, (data) => event(data));
    });
  }
}

/*
//https://stackoverflow.com/questions/53638667/unrecognized-websocket-connection-options-agent-permessagedeflate-pfx
{
  timeout: 10000,
  jsonp: false,
  transports: [‘websocket’],
  autoConnect: false,
  agent: ‘-’,
  path: ‘/’, // Whatever your path is
  pfx: ‘-’,
  key: token, // Using token-based auth.
  passphrase: cookie, // Using cookie auth.
  cert: ‘-’,
  ca: ‘-’,
  ciphers: ‘-’,
  rejectUnauthorized: ‘-’,
  perMessageDeflate: ‘-’
}
*/

export default new Socket(socketURL);