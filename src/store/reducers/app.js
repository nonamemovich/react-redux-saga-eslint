import { 
    ADD_JOKE
} from "../actions/app";

import {getJokeList} from '../localStorage';

let initState = getJokeList();

export default function ( state=initState, action ) {
    switch (action.type) {
        case ADD_JOKE.LOAD:
            return [ ...state];

        case ADD_JOKE.SUCCESS:
            var newState = [ ...state];
            newState.push(action.payload);
            return newState;

        default: 
            return state;
    }
}

