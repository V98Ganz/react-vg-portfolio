import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
    return (
        <nav>
            <Link className="nav-item" to="/" >Home</Link>
            <Link className="nav-item" to="/projects" >Projects</Link>
            <Link className="nav-item" to="/about" >About</Link>
        </nav>
    );
};

export default Nav;