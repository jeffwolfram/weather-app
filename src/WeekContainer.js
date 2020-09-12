import React from 'react';
import DayCard from './DayCard'
import DegreeToggle from './DegreeToggle';

class WeekContainer extends React.Component {
  state = {
    fullData: [],
    dailyData: [], 
    degreeType: "fahrenheit"
  }
  updateForcastDegree = event => {
      this.setState({
          degreeType: event.target.value
      }, () => console.log("this" + this.state))
  }

  componentDidMount = () => {
    const weatherURL =
    'http://api.openweathermap.org/data/2.5/forecast?zip=91504&units=imperial&appid=91e78a6264bd1f448465d11f07163563'

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }
  formatDayCards = () => {
      return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }




  render() {
    return (
        <div className="container">
        <h1 className="display-1 jumbotron text-center">5-Day Forecast.</h1>
        <h5 className="display-5  text-muted text-center">Burbank, California </h5>
        <br></br>
        <div className="text-center"><DegreeToggle degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree} /></div>
        
          <div className="row justify-content-center">
           
            {this.formatDayCards()}
 
          </div>
        </div>
    )
  }
}

export default WeekContainer;