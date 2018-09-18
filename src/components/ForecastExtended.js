import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/style.css'
import ForeCastItem from "./ForesCastItem";
import transformForecast from '../components/services/transformForecast';


const api_key = "954e4abe7b5059e0b826e82a37d76b32";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = {forecastData: null}
  }

  componentDidMount() {
    this.updateCity(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
if (nextProps.city !== this.props.city){
  this.setState({forecastData:null});
  this.updateCity(nextProps.city)
}
  }

  updateCity = city => {
    const url_forecast = `${url}?q=${city}&appid=${api_key}`;
    fetch(url_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        console.log(weather_data, "- weather_data");
        const forecastData = transformForecast(weather_data);
        console.log("forecastDAta", forecastData);
        this.setState({forecastData});
      }
    )
  }

  renderForesCastItemDays(forecastData) {
    //return <h1>"Renders Items"</h1>;
    return forecastData.map(forecast => (
      <ForeCastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      />
    ));
  }

  renderProgress = () => {
    return <h3>"cargando progreso estendido...."</h3>;
  };

  render() {
    const {city} = this.props;
    const {forecastData} = this.state;
    return (
      <div>

        <h2 className={'forecast-title'}>
          {` Pronostico extendido para ${city}`}
        </h2>
        {forecastData ? this.renderForesCastItemDays(forecastData) : this.renderProgress()}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};
export default ForecastExtended;