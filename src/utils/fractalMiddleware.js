export default ({dispatch, getState}) => next => action => {
    console.log(action, next, dispatch);
    return next(action);
}