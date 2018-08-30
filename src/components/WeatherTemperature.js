import React from 'react';
import WheaterIcons from 'react-weathericons';

const WeatherTemperature = ({tempeture,weatherState}) =>{
    return (
       
        <div>
            <WheaterIcons name="cloud" size="2x" />
            <span>{`${tempeture} °C`}</span>
        </div>
    )
};

export default WeatherTemperature;