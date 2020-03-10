import React, { useState} from 'react';

function Contador(){
    const [numero, setNumero] = useState(0);    
    const [numero2, setNumero2] = useState(100);    

    const onClickSuma = () => {
        console.log('onClickSuma');
        setNumero(numero+1);
    }
    const onClickResta = () => {
        setNumero2(numero2 - 1);
    }

    return (
        <div>
            <h1>{`El contador va en ${numero}`}</h1>
            <h1>{`La Resta va en ${numero2}`}</h1>
            <button onClick={onClickSuma}>Sumar +</button>
            <button onClick={onClickResta}>Resta -</button>
        </div>
    )
}

export default Contador;