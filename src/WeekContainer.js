import React from 'react';
import DayCard from './DayCard'
import DegreeToggle from './DegreeToggle';
import City from './City'



class WeekContainer extends React.Component {
  
  state = {
    dailyData: [], 
    degreeType: "imperial",
    city: "91504"
  }
  updateForcastDegree = newDegreeType => {
    // let degrees = {...this.state.degreeType};
    // degrees = event;
      this.setState({ 
        degreeType: newDegreeType
      }, this.componentDidMount);
  }
  addZipcode = zip => {
    this.setState({
      city: zip
    }, this.componentDidMount,
    console.log(this.state.city)
    );
  }

  getNewZipCode = () => {
    fetch(`https://redline-redline-zipcode.p.rapidapi.com/rest/multi-info.json/91504/degrees`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "redline-redline-zipcode.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_ZIP_KEY}`
      }
    })
    .then(response => {
      console.log("this");
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
    console.log("Firing");
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
      }, () => console.log(this.state))
    })
  }
  formatDayCards = () => {
      return this.state.dailyData.map((reading, index) => <DayCard reading={reading} degreeType={this.state.degreeType} key={index} />)
  }




  render() {
    return (
        <div className="container">
        <h1 className="display-1 jumbotron text-center">Burbank</h1>
        <h5 className="display-5  text-muted text-center"><City addZipcode = {this.addZipcode} /> </h5>
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