import React from 'react';
import './Styles.css';

const Weather = (props)=> {

        return(
        <div className="reactResults">
            {props.city && <p>Location: {props.city}</p>}
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Conditions: {props.description}</p>}
            {props.wind && <p >Wind: {props.wind}</p>}
            {props.icon && <p>Icon:{props.icon}</p>}
            
            <p>{props.error}</p>
        </div>
        );
    }


export default Weather;