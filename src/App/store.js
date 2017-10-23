import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import localReducer from '../utils/localReducer';

import app from './reducer';
import moduleA from './moduleA/reducer';
import moduleB from './moduleB/reducer';
import counter from './counter/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
    combineReducers({
        app,
        moduleA,
        moduleB,
        counter,
        counterA: localReducer(counter, 'counterA'),
        counterB: localReducer(counter, 'counterB')
    }),
    composeEnhancers(applyMiddleware(thunk))
);
