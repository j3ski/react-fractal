import React from 'react';
import { connect } from 'react-redux';

const GlobalState = ({state}) => (
    <div>
        {JSON.stringify(state, 2)}
    </div>
);

export default connect(state => ({state}))(GlobalState);
