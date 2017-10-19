import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <nav>
        <Link to='/'>Index</Link>
        <Link to='/moduleA'>Module A</Link>
        <Link to='/moduleB'>Module B</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/counters'>Counters</Link>
    </nav>
);
