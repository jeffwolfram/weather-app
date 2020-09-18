import React from 'react';

const DayForcast = ({forcastType, updateForcastType}) =>  {
    
        return (
            
        <React.Fragment>
        <div className="form-check-inline radial-container">
        <div className="form-check form-check-inline">
            <input
             type="radio"
             className="form-check-input"
             name="single-day"
             id="single-day"
             value="single-day"
             checked={forcastType === "single-day"}
             onChange={event => updateForcastType(event.target.value)}
             
             
            />
            <label className="form-check-label radial-button" htmlFor="single-day"> Single Day </label>
        </div>
        <div className="form-check form-check-inline">
        <input
            className="form-check-input"
            type="radio"
            name="five-day"
            id="five-day"
            value="five-day"
            checked={forcastType === "five-day"}
            onChange={event => updateForcastType(event.target.value)}
            
            
        />
        <label className="form-check-label" htmlFor="five-day">5 day</label>

        </div>
        </div>
    </React.Fragment>
        )
   
} 
export default DayForcast;