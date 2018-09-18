import React from 'react';
import WeatherLocation from "./index";
import PropTypes from 'prop-types';
import '../css/style.css';




const LocationList = ({cities,onelectLocation}) => {
  const handleWeatherLocationClick = city =>{
console.log("Push handleWeatherLocationClick");
onelectLocation(city);
  };
  const strToComponents = cities => (
    cities.map( city =>
      (<WeatherLocation
        city={city}
        key={city}
        onWeatherLocationClick={()=>{
          handleWeatherLocationClick(city)
        }}
      />))
  );

 return(
  <div className={"locationList"}>
    {strToComponents(cities)}
  </div>
 );
};
LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onelectLocation: PropTypes.func,
};
export default LocationList;