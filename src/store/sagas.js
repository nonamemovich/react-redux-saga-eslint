import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_JOKE } from './actions/app';

function loadJoke() {
  const destUrl = 'https://api.chucknorris.io/jokes/random';
  return fetch(destUrl).then(
    res => res.json(),
  );
}

function* loadNewJoke() {
  const response = yield call(loadJoke);
  if (response) {
    yield put({
      type: ADD_JOKE.SUCCESS,
      payload: response,
    });
  } else {
    yield put({
      type: ADD_JOKE.FAILED,
    });
  }
}

function* sagas() {
  yield takeEvery(ADD_JOKE.LOAD, loadNewJoke);
}

export default sagas;
