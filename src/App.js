import React, { Component } from 'react';
import './components/css/style.css';
import Paper from  '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid,Row,Col} from 'react-flexbox-grid';
//import WeatherLocation from './components/WeatherLocation/index';
import LocationList from "./components/WeatherLocation/LocationList";
import ForecastExtended from "./components/ForecastExtended";

const cities= [
  'Zapopan,mx',
  'Bogota,col',
  "Washington, us",
  "Ciudad de México,mx",
  "Madrid,es",
  "Lima,pe",
  ];

class App extends Component {
  state= {city:null};
  handleSelectionLocation = (city) => {
    this.setState({city});
    //console.log(`handleSelectionLocation ${city}`);
  };
  render() {
    const {city} =this.state;
    return (
      <Grid >
        <Row>
          <AppBar position={"sticky"}>
            <Toolbar>
              <Typography variant={"title"} color={"inherit"}>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              onelectLocation={this.handleSelectionLocation}
              cities={cities}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper zdepth={4}>
              <div className={"details"}>
                {city ? <ForecastExtended city={city}/> : null}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
  );

  }
}

export default App;
