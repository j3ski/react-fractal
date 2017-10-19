export default (reducer, key) => (state, action) => {
    if(!action.__key || action.__key === key) {
        return reducer(state, action);
    } else {
        return state;
    }
};
