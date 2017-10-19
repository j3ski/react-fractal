import { createStore, combineReducers } from 'redux';

import app from './reducer';
import moduleA from './moduleA/reducer';
import moduleB from './moduleB/reducer';

export default createStore(
    combineReducers({
        app,
        moduleA,
        moduleB
    })
);
