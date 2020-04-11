import config from './../app.json';

const apiConfig = {
    SERVER_PREFIX: config.SERVER_PREFIX,
    SERVER_PORT: config.SERVER_PORT || 8000,
    SERVER_HOST: config.SERVER_HOST || 'localhost',
    SERVER_PROTOCOL: config.SERVER_PROTOCOL || 'http'
};

export default {
    api: apiConfig.SERVER_PROTOCOL + '://' + apiConfig.SERVER_HOST + ':' + apiConfig.SERVER_PORT + '/' + apiConfig.SERVER_PREFIX,
    socket: apiConfig.SERVER_PROTOCOL + '://' + apiConfig.SERVER_HOST + ':' + apiConfig.SERVER_PORT
};
