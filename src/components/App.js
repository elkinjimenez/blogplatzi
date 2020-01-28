import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Usuarios from './Usuarios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";


const Tareas = () => <div>Hola tareas</div>


const App = () => (

  <BrowserRouter>
    <Menu/>
    <Route exact path='/' component={Usuarios} />
    <Route exact path='/tareas' component={Tareas} />
  </BrowserRouter>

);

export default App;