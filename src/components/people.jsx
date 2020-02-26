import React from "react";
import Card from "react-bootstrap/Card";
let Actor = props => {
    return (
  
  <React.Fragment>
      <div>
      {props.people.map((act) => (
        <div style={{width:"500px", height:"300px"}}>
      <Card>
        <Card.Body>
    <Card.Title>{act.name}</Card.Title>
          <Card.Text>
            {act.age}
            <br/>
            {act.gender}
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
  ))}
  </div>
  </React.Fragment>
  
    );
  };
  export default Actor 