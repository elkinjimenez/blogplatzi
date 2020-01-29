import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import * as usuariosActions from '../../actions/usuariosActions';
import Tabla from './Tabla';

class Usuarios extends Component {

    componentDidMount() {

        this.props.traerTodos()

    }

    ponerConenido = () => {

        if (this.props.cargando) {

            return <Spinner />;

        }

        if (this.props.error) {

            return <Fatal mensaje={this.props.error} />;

        }

        return <Tabla />

    }

    render() {

        return (
            <div className="container-fluid my-5 text-center" >
                <h3>Usuarios</h3>
                {this.ponerConenido()}
            </div>

        );
    }

}

const mapStateToProps = (reducers) => {

    return reducers.usuariosReducer;

};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
