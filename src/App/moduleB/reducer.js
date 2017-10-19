//quack

const MODULE_B_ACTION = 'moduleB/ACTION';

export default (state = 'I am module B', {type, payload}) => {
    switch(type) {
        case MODULE_B_ACTION:
            return payload;
        default:
            return state;
    }
}

export const createAction = payload => ({
    type: MODULE_B_ACTION,
    payload
});
