import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import SingedIn from './components/SignedIn/SignedIn';
import Dashboard from './components/Dashboard/Dashboard';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();
ReactDOM.render(<Dashboard />, document.getElementById('root'));