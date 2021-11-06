import { SERVER_PREFIX, SERVER_PORT, SERVER_HOST, SERVER_PROTOCOL } from 'react-native-dotenv';

const apiConfig = {
  SERVER_PREFIX: SERVER_PREFIX || '',
  SERVER_PORT: SERVER_PORT || 8000,
  SERVER_HOST: SERVER_HOST || 'localhost',
  SERVER_PROTOCOL: SERVER_PROTOCOL || 'http'
};

export default {
  api: apiConfig.SERVER_PROTOCOL + '://' + apiConfig.SERVER_HOST + ':' + apiConfig.SERVER_PORT + '/' + apiConfig.SERVER_PREFIX,
  socket: apiConfig.SERVER_PROTOCOL + '://' + apiConfig.SERVER_HOST + ':' + apiConfig.SERVER_PORT
};
