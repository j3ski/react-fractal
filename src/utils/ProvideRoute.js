import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';

export default ({store, ...rest}) => (
    <Provider store={store}>
        <Route {...rest} />
    </Provider>
);
