import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul className='navbar'>
                <li>
                    <Link to="/" className='pages'>Home</Link>
                </li>
                <li>
                    <Link to="/pictures" className='pages'>Pictures</Link>
                </li>
                <li>
                    <Link to="/contacts" className='pages'>Contacts</Link>
                </li>
                <li>
                    <Link to="/publications" className='pages'>Publications</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;