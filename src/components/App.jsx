import React, { Component } from "react";
/* import logo from './logo.svg';
import './App.css';
 */
import Button from "react-bootstrap/Button";
//import ProgressBar from "react-bootstrap/ProgressBar";
// import Button from "react-bootstrap/Button";
// import Button from "react-bootstrap/Button";
// import Button from "react-bootstrap/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Studio Ghiblis",
      movies: [],
      people: [],
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(data => this.setState({ movies: data }))
      .then(console.log(this.state.movies))
  }
  



  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "gray"
          }}
        >
          <h1>{this.state.text}</h1> 
          <br/>
          <br/>
          <span>
            <Button variant="dark" href="#">
              Link
            </Button>            
            <Button variant="dark" href="https://ghibliapi.herokuapp.com/#">
              Link
            </Button> 
            <Button variant="dark" href="#">
              Link
            </Button>
          </span>
          <br/>
          {/* <ProgressBar animated now={45} /> */}
        </div>
      </React.Fragment>
    );
  }
}

/* function App() {
  return (
    <React.Fragment></React.Fragment>
  )
  
}; */

export default App;
