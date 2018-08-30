import React from 'react';

const WeatherExtraInfo = ({humidity,wind}) => {
/**
 * el ejemplo en el span, es la forma correcta
 * de utilizar las props e implementarlas
*/
    return(
    <div> 
        <span>{`${humidity} % `}</span>
        
        <span>{`${wind} viento`}</span>
    </div>
)
};

export default WeatherExtraInfo;