import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './Logo';
const Navigationbar = () => (
    <Navbar bg={'light'} variant={'light'}>
        <Navbar.Brand><Logo sm/></Navbar.Brand>
        <div className={'navbar-collapse collapse d-flex w-100 justify-content-end'}>
            <Link to={'/login'} className={'btn btn-outline-secondary btn-sm'}>Login</Link>
        </div>
    </Navbar>
);

export default Navigationbar;
