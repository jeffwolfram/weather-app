import React from 'react';
import DayCard from './DayCard'
import DegreeToggle from './DegreeToggle';
import City from './City'
import DayForcast from './DayForcast'
import WeekForcast from './WeekForcast'
const zipInfo = require('./zipInfo.json');

class WeekContainer extends React.Component {
  
  state = {
    dailyData: [], 
    degreeType: "imperial",
    city: "91504",
    forcastType: "five-day"
  }
  
  updateForcastDegree = newDegreeType => {
    // let degrees = {...this.state.degreeType};
    // degrees = event;
      this.setState({ 
        degreeType: newDegreeType
      }, this.componentDidMount);
  };

  updateForcastType = changeForcastType => {
    this.setState({
      forcastType: changeForcastType                          
    }, this.componentDidMount);
  }


  addZipcode = zip => {
    this.setState({
      city: zip
    }, this.componentDidMount,
    
    );
  }
 
     findCity = () => {
    for (var i = 0; i < zipInfo.length; i++) {
      var obj = zipInfo[i]
      if(obj.zip_code === parseInt(this.state.city)){
        return obj.city
      }
    }
      }
    

  componentDidMount = () => {
   
      const weatherURL =
      `http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.city}&units=${this.state.degreeType}&appid=${process.env.REACT_APP_API_KEY}`
      fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
      console.log("Data List Loaded", data.list)
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({
       
        dailyData: dailyData
      },)
      
    })
  }
  
  formatDayCards = () => {
    if (this.state.forcastType !== "five-day") {
      return this.state.dailyData.map((reading, index) => <DayCard reading={reading} degreeType={this.state.degreeType} forcastType={this.state.forcastType} key={index} />)
    } else {
      return this.state.dailyData.map((reading, index) => <WeekForcast reading={reading} degreeType={this.state.degreeType} forcastType={this.state.forcastType} key={index} />)
      
    }
  }

  render() {
    return (
        <div className="container">
        <h1 className="display-1 jumbotron text-center">{this.findCity()}</h1>
        <h5 className="display-5  text-muted text-center"><City addZipcode = {this.addZipcode} /> </h5>
        <br></br>
        <div className="text-center"><DegreeToggle degreeType={this.state.degreeType} updateForcastDegree={this.updateForcastDegree} /> </div>
        <div className="text-center"> <DayForcast forcastType={this.state.forcastType} updateForcastType={this.updateForcastType} dailyData={this.state.dailyData[0]} /></div>
        
          <div className="row justify-content-center">
            {/* This is where we are going to put the single day forcast */}
          
            {this.formatDayCards()}
          </div>
        </div>
    )
  }
}

export default WeekContainer;