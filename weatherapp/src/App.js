import React, { Component } from 'react';
import Weather from './compoment/weathercomponent'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import { isCompositeComponent } from 'react-dom/test-utils';
const APIkey = "d794f70b6df590bd13f3d7d4c4fe39fa";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city : undefined,
      country : undefined,
      icon : undefined,
      main : undefined,
      temp : undefined,
      temp_max : undefined,
      temp_min :undefined,
      description : "",
      error : false
    };
    
    this.getWeather();
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }
  
calCelcius(tp)  {
let cell= Math.floor(tp - 273.15)
return cell;

}



  // seting icons
   getWeatherIcon(icon,rangeId)
   {
     switch(true){
       case rangeId >= 200 && rangeId < 232 :
         this.setState({icon: icon.Thunderstorm});
         break;
      
          case rangeId >= 300 && rangeId < 321 :
         this.setState({icon: icon.Drizzle});
         break;
         case rangeId >= 500 && rangeId < 521 :
         this.setState({icon: icon.Rain});
         break;
         case rangeId >= 701 && rangeId < 781 :
         this.setState({icon: icon.Atmosphere});
         break;
         case rangeId === 800:
         this.setState({icon: icon.Clear});
         break;
         case rangeId >= 801 && rangeId < 804 :
          this.setState({icon: icon.Clouds});
          break;
        default:
          this.setState({icon : icon.Clouds})
     }
   }



  getWeather = async() =>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Chelmsford&appid=${APIkey}`);
    const response = await api_call.json();
    console.log(response);

    this.setState(
      { 
        city : response.name,
        country : response.sys.country,
        temp : this.calCelcius(response.main.temp),
        temp_max : this.calCelcius(response.main.temp_max),
        temp_min : this.calCelcius(response.main.temp_min),
        description: response.weather[0].description ,icon : this.weatherIcon.Snow,
        error : false,
        });  
        this.getWeatherIcon(this.weatherIcon,response.weather[0].id)
  };


  
  render()

  {
    console.log(this.state.description)
    return( 
      <div className="Weatapp">
        
      <Weather 
      city={this.state.city} 
      country={this.state.country}
      temp = {this.state.temp}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
      weatherIcon={this.state.icon}
      />
   </div>);
  }
}


export default App;
