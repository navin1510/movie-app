import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header() {
    return (
        <Navbar color="primary" light expand="md">
            <NavbarBrand href="/" style={{
                color: "#fff"
            }}>Movies App</NavbarBrand>
        </Navbar>
    )
}

export default Header;
