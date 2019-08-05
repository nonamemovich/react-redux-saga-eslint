export const ADD_JOKE = {
  SUCCESS: 'ADD_JOKE',
  LOAD: 'LOAD_NEW_JOKE',
};

export function loadJoke() {
  return {
    type: ADD_JOKE.LOAD,
  };
}

export function loadJokeSuccess(Joke) {
  return {
    type: ADD_JOKE.SUCCESS,
    payload: Joke,
  };
}
