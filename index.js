/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//使其可以捕获到网络请求
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHTTPRequest || GLOBAL.XMLHttpRequest
AppRegistry.registerComponent(appName, () => App);
