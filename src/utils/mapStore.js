export default (store, selector, key) => ({
    ...store,
    getState() {
        return selector(store.getState());
    },
    dispatch(action) {
        action.__key = key;
        return store.dispatch(action);
    }
});
