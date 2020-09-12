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
                 value="celsius"
                //  onChange={updateForcastDegree}
                 
                 
                />
                <label className="form-check-label radial-button" htmlFor="celsius"> Celsius </label>
            </div>
            <div className="form-check form-check-inline">
            <input
                className="form-check-input"
                type="radio"
                name="degree-type"
                id="farenheit"
                value="fahrenheit"
                // onChange={updateForcastDegree}
                
                
            />
            <label className="form-check-label" htmlFor="farenheit">Farenheit</label>
   
            </div>
            </div>
        </React.Fragment>
    )
}
export default DegreeToggle;