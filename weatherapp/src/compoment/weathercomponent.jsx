import React from 'react';
const Weather = (props) =>{
    return(
        <div className="container">
            <div className="city">
    <h1>
        {props.city},{props.country}
    </h1>
                <h5 className="py-4">
                <i class="wi wi-day-lightning display-1"></i>
                </h5>
                <h1 className="py-2">{props.temp_celcius}&deg;</h1>
                {/** show max and min temp*/}
                {Temperature(props.temp_min,props.temp_max)}
                <h4>{props.description}</h4>
            </div>
        </div>
    );
}

function Temperature(min,max)
{
    return(
        <h3>
            <span className="px-4"> 
            {min}&deg;
            </span>
            <span className="px-4"> 
            {max}&deg;
            </span>
        </h3>
    );
}

export default Weather;