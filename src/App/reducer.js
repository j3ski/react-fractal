//quack
const SOME_ROOT_ACTION = 'root/SOME_ROOT_ACTION';

export default (state = {}, {type, payload}) => {
    switch(type) {
        case SOME_ROOT_ACTION:
            return payload;
        default:
            return state;
    }
}

export const someAction = (payload) => ({
    type: SOME_ROOT_ACTION,
    payload
});
