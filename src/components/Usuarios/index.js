import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';

import * as usuariosActions from '../../actions/usuariosActions';

class Usuarios extends Component {

    componentDidMount() {

        this.props.traerTodos()

    }

    ponerConenido = () => {

        if (this.props.cargando) {
            return <Spinner />;
        }

        return (
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Enlace</th>
                    </tr>
                </thead>
                <tbody>
                    {this.ponerFilas()}
                </tbody>
            </table>
        )

    }

    ponerFilas = () => (

        this.props.usuarios.map((usuario) => (

            <tr key={usuario.id}>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.website}</td>
            </tr>

        ))

    )

    render() {

        return (
            <div className="container-fluid my-5" >

                {this.ponerConenido()}

            </div>

        );
    }

}

const mapStateToProps = (reducers) => {

    return reducers.usuariosReducer;

};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
