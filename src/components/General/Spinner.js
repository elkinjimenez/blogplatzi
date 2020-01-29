import React from 'react';

const Spinner = (props) => (

    <div className="text-center my-5 grey-text">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <h3 className="my-5">Cargando ...</h3>
    </div>

);

export default Spinner;