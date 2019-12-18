import React, { Component } from 'react';
import Weather from './compoment/weathercomponent'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
const APIkey = "d794f70b6df590bd13f3d7d4c4fe39fa";
//comment
class App extends React.Component{
  constructor(){
    super();
    this.state={
      city : undefined,
      country : undefined,
      icon : undefined,
      main : undefined,
      celsius : undefined,
      temp_max : undefined,
      temp_min :undefined,
      description : "",
      error : false
    };
    this.getWeather();
  }
  getWeather = async() =>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Chelmsford&appid=${APIkey}`);
    const response = await api_call.json();
    console.log(response);

    this.setState(
      {
        city : response.name,
        country : response.sys.country
      }
    );
  }
  render(){
    return( 
      <div className="Weatapp">
        <h1>Hello World!</h1>
      <Weather city={this.state.city} country={this.state.country}/>
   </div>
    );
  }
}


export default App;
