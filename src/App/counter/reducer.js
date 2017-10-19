const ADD = 'ADD';

export default (state = 0, {type, payload}) => {
    switch(type) {
        case ADD:
            return state+payload;
        default:
            return state
    }
}

export const increment = () => ({
    type: ADD,
    payload: 1
});

export const decrement = () => ({
    type: ADD,
    payload: -1
});
