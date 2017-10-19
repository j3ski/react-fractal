import React from 'react';
import ProvideRoute from '../utils/ProvideRoute';
import { Route, Switch } from 'react-router-dom';

import ModuleA from './moduleA';
import ModuleB from './moduleB';
import GlobalState from '../utils/GlobalState';
import Counter from './counter';
import Counters from './Counters';

export default () => (
    <Switch>
        <ProvideRoute 
            exact
            path='/moduleA' 
            component={ModuleA}
            storeSelector={state => state.moduleA}
            key='moduleA'
        />
        <ProvideRoute 
            exact
            path='/moduleB'
            component={ModuleB}
            storeSelector={state => state.moduleB}
            key='moduleB'
        />
        <ProvideRoute
            exact
            path='/counter'
            component={Counter}
            storeSelector={state => state.counter}
            key='counter' />
        <Route exact path='/counters' component={Counters} />
        <Route component={GlobalState} />
    </Switch>
);