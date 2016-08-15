import React from 'react';
import ReactDOM from 'react-dom';
import musicApp from './reducers/allReducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import { Router, browserHistory } from 'react-router'
import Routes from './routes'
import {reducer as formReducer} from 'redux-form'
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
 <Provider store={createStoreWithMiddleware(musicApp)}>
   <Router history={browserHistory} routes={Routes} />
 </Provider>,
 document.getElementById('root')
);
