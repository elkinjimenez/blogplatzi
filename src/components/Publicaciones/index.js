import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

const { traerTodos: usuarioTraerTodos } = usuariosActions;

const { traerTodos: publicacionesTraerTodos } = publicacionesActions;

class Publicaciones extends Component {

    componentDidMount() {
        if (!this.props.usuariosReducer.usuarios.lenght) {

            this.props.usuarioTraerTodos();

        }
    }

    render() {

        return (

            <div className="text-center">
                <h1>Publicaciones de </h1>
                {this.props.match.params.key}
            </div>

        )

    }

}

const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {

    return {
        usuariosReducer,
        publicacionesReducer
    }

}

const mapDispacthToProps = {

    usuarioTraerTodos,
    publicacionesTraerTodos

};

export default connect(mapStateToProps, mapDispacthToProps)(Publicaciones);