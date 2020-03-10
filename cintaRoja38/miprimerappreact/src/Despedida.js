import React from 'react';

function Despedida(props){
    console.log(props);    
    return (
        <div className="Despedida">
            <h3>{props.mensaje}</h3>
    <p>{new Date().toLocaleDateString()}</p>
        </div>
    )
}

export default Despedida;