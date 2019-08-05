import {
  ADD_JOKE,
} from '../actions/app';

import { getJokeList } from '../localStorage';

const initState = getJokeList();

export default function (state = initState, action) {
  let newState;
  switch (action.type) {
    case ADD_JOKE.LOAD:
      return [...state];

    case ADD_JOKE.SUCCESS:
      newState = [...state];
      newState.push(action.payload);
      return newState;

    default:
      return state;
  }
}
