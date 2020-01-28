import React from "react";
import { Link } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

export default () => (
    <MDBNav className="justify-content-center py-4 elegant-color-dark">
        <MDBNavItem>
            <MDBNavLink className="white-text" to='/'>Usuarios</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
            <MDBNavLink className="white-text" to="/tareas">Tareas</MDBNavLink>
        </MDBNavItem>
    </MDBNav>
);