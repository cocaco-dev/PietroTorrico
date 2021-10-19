import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); //Undefined si no se pone las comillas
    const handleInputChange = (e) => {        
        setInputValue(e.target.value)        
    }
    const handleSubmit = (e) => {
        e.preventDefault();   
        console.log('ENVIO', inputValue);     
        if(inputValue.trim().length > 2){
            setCategories(cate => [inputValue, ...cate]); //cate hace referencia al contenido del componente  
            setInputValue('');
        }
    }

    return (
        <form onSubmit = {handleSubmit}>        
            {/* <p>{inputValue}</p>     */}
            <input
                type="text"
                value = {inputValue}
                onChange={handleInputChange}
                placeholder = 'Ingresa una categoria'
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}