import React from 'react';
const DegreeToggle = ({degreeType, updateForcastDegree}) => {

    
    return (
        
        <React.Fragment>
            <div className="form-check-inline radial-container">
            <div className="form-check form-check-inline">
                <input
                 type="radio"
                 className="form-check-input"
                 name="degree-type"
                 id="celsius"
                 value="metric"
                 checked={degreeType === "metric"}
                 onChange={event => updateForcastDegree(event.target.value)}
                 
                 
                />
                <label className="form-check-label radial-button" htmlFor="celsius"> Celsius </label>
            </div>
            <div className="form-check form-check-inline">
            <input
                className="form-check-input"
                type="radio"
                name="degree-type"
                id="farenheit"
                value="imperial"
                checked={degreeType === "imperial"}
                onChange={event => updateForcastDegree(event.target.value)}
                
                
            />
            <label className="form-check-label" htmlFor="farenheit">Farenheit</label>
   
            </div>
            </div>
        </React.Fragment>
    )
}
export default DegreeToggle;