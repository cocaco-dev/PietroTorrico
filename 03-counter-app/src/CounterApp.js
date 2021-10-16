import React, {useState} from 'react';
import PropTypes from 'prop-types';

// Functional Component

const CounterApp = ({value}) => {
    
    const [counter, setCounter] = useState(value); //[]
    
   
    // handleAdd
    const handleAdd = () => {
        // setCounter(counter + 1);
        setCounter((c)=> c +1);
    }
    const subStract = () =>{
        setCounter(counter - 1);
    }
    return(
        <>
        <h1>CounterApp</h1>
        <h2>Tengo {counter} años</h2>
        <button onClick ={handleAdd}>+1</button>
        <button onClick = {subStract}>-1</button>
        <button onClick = {()=>{setCounter(value)}}>Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export{
    CounterApp as default,
}