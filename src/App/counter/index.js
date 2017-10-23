import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, incrementAsync } from './reducer';

const Counter = ({ value, increment, decrement, incrementAsync }) => (
    <div>
        <button onClick={decrement}>-</button>
        <span>{value}</span>
        <button onClick={increment}>+</button>
        <button onClick={incrementAsync}>async</button>
    </div>
);

export default connect(
    state => ({ value: state }),
    {increment, decrement, incrementAsync}
)(Counter);
