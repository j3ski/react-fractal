export default (store, selector) => ({
    ...store,
    getState() {
        return selector(store.getState());
    }
});
