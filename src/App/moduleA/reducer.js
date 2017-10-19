//quack

const MODULE_A_ACTION = 'moduleA/ACTION';

export default (state = 'I am module A', {type, payload}) => {
    switch(type) {
        case MODULE_A_ACTION:
            return payload;
        default:
            return state;
    }
}

export const createAction = payload => ({
    type: MODULE_A_ACTION,
    payload
});
