import '@babel/polyfill';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {cookie}  from './cookie.js';
import thunk  from 'redux-thunk';

import reducer from './reducers/index';

import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware, cookie];

const store = createStore(
  reducer,
  applyMiddleware(...middleWares)
);

sagaMiddleware.run(mySaga);

export default store;