import { 
    ADD_JOKE
} from "../actions/app";

let getListFromCoockie = [{
    "categories": [],
    "created_at": "2016-05-01 10:51:41.584544",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "_PvjqgUsRkW_BHLR03nNvQ",
    "updated_at": "2016-05-01 10:51:41.584544",
    "url": "https://api.chucknorris.io/jokes/_PvjqgUsRkW_BHLR03nNvQ",
    "value": "Chuck Norris dosn't talk to people, he KILLS them   Chuck Norris dosn't neet a friend to have fun."
}];

let initState = getListFromCoockie;

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

