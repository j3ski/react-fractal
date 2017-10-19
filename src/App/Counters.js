import React from 'react';
import Counter from './counter';
import ProviderSelector from '../utils/ProviderSelector';

export default () => (
    <div>
        <span>Counter1: </span>
        <ProviderSelector storeSelector={state => state.counterA} key='counterA' storeKey='counterA'>
            <Counter />
        </ProviderSelector>
        <ProviderSelector storeSelector={state => state.counterB} key='counterB' storeKey='counterB'>
            <Counter />
        </ProviderSelector>
    </div>
)