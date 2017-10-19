import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import invariant from 'invariant';

import mapStore from './mapStore';

class ProviderSelector extends Component {
    constructor(props, context) {
        super(props, context);
        console.log(context);
        invariant(context.store, 'ProviderSelector must be used inside a Provider!');
        this.store = mapStore(context.store, props.storeSelector, props.storeKey);
    }

    render() {
        const { children } = this.props;

        return <Provider store={this.store}>
            {children}
        </Provider>
    }
}

ProviderSelector.propTypes = {
    storeSelector: PropTypes.func.isRequired
};

ProviderSelector.contextTypes = {
    store: PropTypes.shape({
        subscribe: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired
    })
}

export default ProviderSelector;
