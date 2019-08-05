import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { storageMiddleWare } from './localStorage';

import reducer from './reducers/index';

import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware, storageMiddleWare];

const store = createStore(
  reducer,
  applyMiddleware(...middleWares),
);

sagaMiddleware.run(mySaga);

export default store;
