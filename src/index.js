import React from 'react';
import ReactDOM from 'react-dom';
import musicApp from './reducers/allReducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import { Router, browserHistory } from 'react-router'
import Routes from './routes'
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
 <Provider store={createStoreWithMiddleware(musicApp, window.devToolsExtension ? window.devToolsExtension() : f => f)}>
   <Router history={browserHistory} routes={Routes} />
 </Provider>,
 document.getElementById('root')
);
