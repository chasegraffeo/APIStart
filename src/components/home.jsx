import React from "react";
import Button from "react-bootstrap/Button";
import "../App.css";

const Home = (props) => {
  return (
    <React.Fragment>
      <span>
        <div className="navbar navbar-expand-lg navbar-light fixed-top bg-primary">
          <h1>{props.text}</h1>
          <br />
          <br />
          <Button variant="dark" onClick={props.movWatch}>
            Movies
          </Button>
          <Button variant="dark" onClick={props.pplActing}>
            Actors
          </Button>
        </div>
      </span>
      <br />
    </React.Fragment>
  );
};
export default Home;
