import React from 'react';
import DayCard from './DayCard'
import DegreeToggle from './DegreeToggle';

class WeekContainer extends React.Component {
  state = {
    dailyData: [], 
    degreeType: "imperial"
  }
  updateForcastDegree = newDegreeType => {
    // let degrees = {...this.state.degreeType};
    // degrees = event;
      this.setState({ 
        degreeType: newDegreeType
      }, this.componentDidMount);
  }

  componentDidMount = () => {
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?zip=91504&units=${this.state.degreeType}&appid=${process.env.REACT_APP_API_KEY}`
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      console.log("Data List Loaded", data.list)
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      
      this.setState({
       
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }
  formatDayCards = () => {
      return this.state.dailyData.map((reading, index) => <DayCard reading={reading} degreeType={this.state.degreeType} key={index} />)
  }




  render() {
    return (
        <div className="container">
        <h1 className="display-1 jumbotron text-center">5-Day Forecast.</h1>
        <h5 className="display-5  text-muted text-center">Burbank, California </h5>
        <br></br>
        <div className="text-center"><DegreeToggle degreeType={this.state.degreeType} updateForcastDegree={this.updateForcastDegree} /></div>
        
          <div className="row justify-content-center">
           
            {this.formatDayCards()}
 
          </div>
        </div>
    )
  }
}

export default WeekContainer;