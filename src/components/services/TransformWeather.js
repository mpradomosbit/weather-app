import convert from "convert-units/lib";
import w from "../const/weaters";

const getTemp = kelvin =>{
  return Number(convert(kelvin).from('K').to("C").toFixed(0));
};

const getWeatherState = weather =>{
  const {id} = weather;
  if (id<300){
    return w.THUNDER;
  }else  if(id < 400){
    return w.DRIZZLE;
  }else if(id < 600){
    return w.RAIN;
  }else if(id < 700){
    return w.SNOW;
  }else if (id === 800) {
    return w.SUN;
  }else {
    return w.CLOUD;
  }
};

const TransformWeather = weather_data =>{
  const {humidity,temp}= weather_data.main;
  const {speed} = weather_data.wind;
  const temperature = getTemp(temp);
  const weatherState = getWeatherState(weather_data.weather[0]);

  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,
  };
  return data;
};
export  default  TransformWeather;