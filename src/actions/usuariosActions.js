import axios from 'axios';
import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usuariosTypes';

export const traerTodos = () => async (dispactch) => {

    dispactch({
        type: CARGANDO
    })

    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');

        dispactch({

            type: TRAER_TODOS,
            payload: respuesta.data

        })

    } catch (error) {

        dispactch({
            type:ERROR,
            payload: error.message
        })

    }

}