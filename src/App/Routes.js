import React from 'react';
import ProvideRoute from '../utils/ProvideRoute';
import { Route, Switch } from 'react-router-dom';

import ModuleA from './moduleA';
import ModuleB from './moduleB';
import GlobalState from '../utils/GlobalState';

import store from './store';
import mapStore from '../utils/mapStore';

const moduleAStoreFragment = mapStore(store, state => state.moduleA);
const moduleBStoreFragment = mapStore(store, state => state.moduleB);

export default () => (
    <Switch>
        <ProvideRoute 
            exact
            path='/moduleA' 
            component={ModuleA}
            store={moduleAStoreFragment}
            key='moduleA'
        />
        <ProvideRoute 
            exact
            path='/moduleB'
            component={ModuleB}
            store={moduleBStoreFragment}
            key='moduleB'
        />
        <Route component={GlobalState} />
    </Switch>
);