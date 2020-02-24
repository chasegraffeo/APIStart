import React, { Component } from "react";
/* import logo from './logo.svg';
import './App.css';
 */
import Button from 'react-bootstrap/Button';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hello'
    };
  }

  render() {
    return <React.Fragment>
      <h1>{this.state.text}</h1>
      <Button variant="warning">Warning</Button>{' '}
    </React.Fragment>;
  }
}

/* function App() {
  return (
    <React.Fragment></React.Fragment>
  )
  
}; */

export default App;
