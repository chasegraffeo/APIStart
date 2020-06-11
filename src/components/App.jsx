import React, { Component } from "react";
import Films from "./films";
import Actor from "./people";
import Button from "react-bootstrap/Button";
import Home from "./home";

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

  backHome = () => {
    this.setState({ pplShown: false });
    this.setState({ movieShown: false });
  };

  movWatch = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(obj =>
        this.setState({ movies: obj, movieShown: true, pplShown: false })
      );
    
  };

  pplActing = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(response => response.json())
      .then(obj =>
        this.setState({ people: obj, pplShown: true, movieShown: false })
      );
   
  };

  render() {
    if (this.state.movieShown) {
      return (
        <React.Fragment>
          <span>
            <div className="navbar navbar-expand-lg navbar-light bg-primary">
              <h1>{this.state.text}</h1>
              <br />
              <br />
              <Button variant="dark" onClick={this.backHome}>
                Home
              </Button>
              <Button variant="dark" onClick={this.movWatch}>
                Movies
              </Button>
              <Button variant="dark" onClick={this.pplActing}>
                Actors
              </Button>
            </div>
          </span>
          <br />
          <Films movies={this.state.movies} />
        </React.Fragment>
      );
    } else if (this.state.pplShown) {
      return (
        <React.Fragment>
          <span>
            <div className="navbar navbar-expand-lg navbar-light bg-primary">
              <h1>{this.state.text}</h1>
              <br />
              <br />
              <Button variant="dark" onClick={this.backHome}>
                Home
              </Button>
              <Button variant="dark" onClick={this.movWatch}>
                Movies
              </Button>
              <Button variant="dark" onClick={this.pplActing}>
                Actors
              </Button>
            </div>
          </span>
          <br />

          <Actor people={this.state.people} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <span>
            <div className="navbar navbar-expand-lg navbar-light bg-primary">
              <h1>{this.state.text}</h1>
              <br />
              <br />

              <Button variant="dark" onClick={this.movWatch}>
                Movies
              </Button>
              <Button variant="dark" onClick={this.pplActing}>
                Actors
              </Button>
            </div>
          </span>
          <br />
          <Home text={this.state.text} movWatch={this.movWatch} pplActing={this.pplActing} />
        </React.Fragment>
      );
    }
  }
}

export default App;
