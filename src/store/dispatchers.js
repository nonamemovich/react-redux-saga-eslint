import getAppDispatchers from "../components/appDispatchers";

export default (dispatch) => {
    let appDispatcher = getAppDispatchers(dispatch);
    let dispatcher = Object.assign({}, appDispatcher);
    
    return dispatcher;
};