import React, { Component } from "react";
import Films from'./films';
import Actor from'./people';
import Button from "react-bootstrap/Button";
 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Studio Ghiblis",
      movies: [],
      people: [],
      movieShown: false,
      pplShown: false
    };
  }
   
 movWatch = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(obj => this.setState({ movies: obj, movieShown: true, pplShown:false }))
      //.then(data => console.log(data))
  }
  
  pplActing = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(response => response.json())
      .then(obj => this.setState({ people: obj, pplShown: true, movieShown:false }))
      //.then(ppl => console.log(ppl))
  }
  

 
  render() {
    if (this.state.movieShown){
      return ( <React.Fragment>
        <h1>{this.state.text}</h1> 
        <br/>
        <br/>
        <span>
          <Button variant="dark" onClick={this.movWatch}>
            Link
          </Button>            
          <Button variant="dark" onClick={this.pplActing}>
            Link
          </Button>
        </span>
        <br/>
      <Films movies={this.state.movies} />
      
       
    </React.Fragment>)
    }else if(this.state.pplShown){
    return (
      <React.Fragment>
          <h1>{this.state.text}</h1> 
          <br/>
          <br/>
          <span>
            <Button variant="dark" onClick={this.movWatch}>
              Link
            </Button>            
            <Button variant="dark" onClick={this.pplActing}>
              Link
            </Button>
          </span>
          <br/>
        
        <Actor people={this.state.people} />
         
      </React.Fragment>
    );}else{
      return(
      <React.Fragment>
          <h1>{this.state.text}</h1> 
          <br/>
          <br/>
          <span>
            <Button variant="dark" onClick={this.movWatch}>
              Link
            </Button>            
            <Button variant="dark" onClick={this.pplActing}>
              Link
            </Button>
          </span>
          <br/>
        
       
         
      </React.Fragment>
      )
    }
  }
}



export default App;
