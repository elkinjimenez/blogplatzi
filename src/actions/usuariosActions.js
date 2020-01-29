import axios from 'axios';

export const traerTodos = () => async (dispactch) => {

    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispactch({

        type: 'traer_usuarios',
        payload: respuesta.data

    })

}