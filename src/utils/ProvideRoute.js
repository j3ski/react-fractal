import React from 'react';
import { Route } from 'react-router-dom';
import ProviderSelector from './ProviderSelector';

export default ({storeSelector, ...rest}) => (
    <ProviderSelector storeSelector={storeSelector}>
        <Route {...rest} />
    </ProviderSelector>
);
