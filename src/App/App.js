import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navigation from './Navigation';
import Routes from './Routes';

import store from './store';
import './App.css';

const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <div>
                <Navigation />
                <Routes />
            </div>
        </Provider>
    </BrowserRouter>
);

export default App;
