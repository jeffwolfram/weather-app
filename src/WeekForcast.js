import React from 'react';
var moment = require('moment');

const WeekForcast = ({reading, degreeType, forcastType}) => {
    
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)
    const imgURL = `owf owf-${reading.weather[0].id} owf-5x`
    const fahrenheit = Math.round(reading.main.temp)
    const celsius = Math.round(reading.main.temp)
    const tempHi = Math.round(reading.main.temp_max)
    const tempLo = Math.round(reading.main.temp_min)
    

   

    return (
       
        <div className="col-sm-2 text-center d-flex align-items-stretch">
            <div className="card text-white bg-secondary ">
                <h3 className="card-title text-center">{moment(newDate).format('dddd')}</h3>
                <p className="card-text text-center">{moment(newDate).format('MMMM Do, h:mm a')}</p>
    <i className={imgURL} ></i>
    <h2>{degreeType === "metric" ? celsius + "°C" : fahrenheit + "°F"}</h2>
                <div className="card-body text-center">
                    
                    <p className="text-center card-text">Humidity: {reading.main.humidity} %</p>
                    <p className="text-center card-text">Wind {Math.round(reading.wind.speed)} mph </p>
                    <p className="text-center card-text">
                        Hi: {tempHi} -
                        Lo: {tempLo}
                        
                        </p>
                    <p className="card-text text-center">{reading.weather[0].description}</p>
                </div>
            </div>
        </div>
    )
}
export default WeekForcast;