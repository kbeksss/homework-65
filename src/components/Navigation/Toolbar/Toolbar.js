import React from 'react';
import './Toolbar.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {NavLink as RouterNavLink} from "react-router-dom";



const Toolbar = () => {
    return (
        <header className='Toolbar'>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={RouterNavLink} to='/pages/home' exact>Lorem Web-page</NavbarBrand>
                <Nav className="ml-auto" navbar pills>
                    <NavItem className='mr-5'>
                        <NavLink tag={RouterNavLink} to='/pages/home' exact>Home</NavLink>
                    </NavItem>
                    <NavItem className='mr-5'>
                        <NavLink tag={RouterNavLink} to="/pages/about">About</NavLink>
                    </NavItem>
                    <NavItem className='mr-5'>
                        <NavLink tag={RouterNavLink} to="/pages/contacts" >Contacts</NavLink>
                    </NavItem>
                    <NavItem className='mr-5'>
                        <NavLink tag={RouterNavLink} to="/admin" >Admin</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Toolbar;