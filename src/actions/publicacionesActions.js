import axios from 'axios';
import { TRAER_TODOS, CARGANDO, ERROR } from '../types/publicacionesTypes';

export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: CARGANDO
    })

    try {

        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');

        dispatch({

            type: TRAER_TODOS,
            payload: respuesta.data

        })

    } catch (error) {

        dispatch({
            type: ERROR,
            payload: error.message
        })

    }

}

export const  traerPorUsuario = () => async (dispatch) =>{

    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts?useId=1');

dispatch({

            type: TRAER_TODOS,
            payload: respuesta.data

        })
}