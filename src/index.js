import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import './App.css';

ReactDOM.render((
  <BrowserRouter basename={'toptrumps'}>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
serviceWorker.unregister();
