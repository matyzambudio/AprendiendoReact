import React from 'react';


function MiComponenteDos(props) {
    const {dato} = props;
    return(
        <>
        <h2>su name:{dato.nombre}</h2>
        <h2>su apellido:{dato.apellido}</h2>
        <h2>su pais:{dato.pais}</h2>
        <h2>edad:{dato.edad}</h2>
        </>
    )
}

export default MiComponenteDos;