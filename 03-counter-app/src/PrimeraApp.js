import React from 'react'; //Debes importar react para usar la etiquetas HTML
import PropTypes from 'prop-types';

// Funcional Componnet 

const PrimeraApp = ({saludo, subtitulo}) =>{

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre>  */}
            <p>{subtitulo}</p>
        </>        
    );
    

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,    
};
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo' //Este es un contenido Por defecto en caso que no se envie ningun dato
}

export{
    PrimeraApp as default,
}