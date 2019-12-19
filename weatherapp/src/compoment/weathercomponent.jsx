import React from 'react';
const Weather = (props) =>{
    return(
        <div className="container">
            <div className="city">
    <h1>
        {props.city},{props.country}
    </h1>
                <h5 className="py-4">
                <i class={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                <h4>{props.temp}&deg;c</h4>
                {/** show max and min temp*/}
                {Temperature(props.temp_min,props.temp_max)}
     {/* Weather description */}
     <h4 className="py-3">
         {props.description}

        </h4>
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