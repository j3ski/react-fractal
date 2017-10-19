import { createStore, combineReducers } from 'redux';

import localReducer from '../utils/localReducer';

import app from './reducer';
import moduleA from './moduleA/reducer';
import moduleB from './moduleB/reducer';
import counter from './counter/reducer';

export default createStore(
    combineReducers({
        app,
        moduleA,
        moduleB,
        counter,
        counterA: localReducer(counter, 'counterA'),
        counterB: localReducer(counter, 'counterB')
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
