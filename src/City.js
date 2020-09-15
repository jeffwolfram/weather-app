import React from 'react';

class City extends React.Component {
zipRef = React.createRef();

createZip = (event) => {
    //1. stop the form from submitting
    event.preventDefault();
    const zip = this.zipRef.current.value
    console.log("adding a zip");
    console.log(zip);
   this.props.addZipcode(zip);
}
render() {


    return (
        
    <form className="" onSubmit={this.createZip}>
        <input type="text" ref={this.zipRef} placeholder="add Zip" />
        <button type="submit">Submit</button>
    </form>
    )}
}
export default City;