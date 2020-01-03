import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <NavLink to="/about">
            <p>About</p>
        </NavLink>
        <a
            href="https://airtable.com/shrZE2v6sztAM40oo"
            rel="noopener noreferrer"
            target="_blank"
        >
            <p>Join</p>
        </a>
        <a
            href="https://lambdaschool.com"
            rel="noopener noreferrer"
            target="_blank"
        >
            <p>Lambda School</p>
        </a>
    </nav>
);

export default Navigation;
