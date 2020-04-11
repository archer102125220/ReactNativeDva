/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import App from './app/index';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

AppRegistry.registerComponent(appName, () => App);
