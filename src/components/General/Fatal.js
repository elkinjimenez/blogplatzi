import React from 'react';

const Fatal = (props) => (

    <div className="text-center my-5 py-5">
        <i class="fas fa-radiation-alt fa-7x fa-spin danger-ic"></i>
        <h3 className="my-4 font-weight-bold">Error 404</h3>
        <h6>{props.mensaje}</h6>
    </div>

)

export default Fatal;