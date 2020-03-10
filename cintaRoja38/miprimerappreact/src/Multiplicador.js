import React, { useState} from 'react';

function Multiplicador(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const onClickMultiplicar = () => {
        const res = num1 * num2;
        setResultado(res);
    }

    const onChangeInput = (event) => {
        if(event.target.id === 'numero1'){
            setNum1(event.target.value);
        } else {
            setNum2(event.target.value);
        }
    }

    return (
        <div>
            <input onChange={onChangeInput} id="numero1" placeholder="Numero 1"></input>
            <p>X</p>
            <input onChange={onChangeInput} id="numero2" placeholder="Numero 2"></input>
            <br/>
            <button onClick={onClickMultiplicar}>Multiplicar</button>
            <p>El resultado es: {resultado}</p>
        </div>
    )
}

export default Multiplicador;