import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from './reducer';

const Counter = ({ value, increment, decrement }) => (
    <div>
        <button onClick={decrement}>-</button>
        <span>{value}</span>
        <button onClick={increment}>+</button>
    </div>
);

export default connect(
    state => ({ value: state }),
    {increment, decrement}
)(Counter);
