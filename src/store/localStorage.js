import { ADD_JOKE } from './actions/app';

const localstorage = window.localStorage;

function pushJokeInStorege(newJoke) {
  const JokeList = JSON.parse(localstorage.getItem('jokeList')) || [];
  JokeList.push(newJoke);
  localstorage.setItem('jokeList', JSON.stringify(JokeList));
}

export function getJokeList() {
  return JSON.parse(localstorage.getItem('jokeList')) || [];
}

export const storageMiddleWare = () => next => (action) => {
  if (ADD_JOKE.SUCCESS === action.type) {
    pushJokeInStorege(action.payload);
  }

  return next(action);
};
