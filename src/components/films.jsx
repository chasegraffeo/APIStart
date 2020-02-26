import React from "react";
import Card from "react-bootstrap/Card";

let Films = props => {
  return (

<React.Fragment>
    <div>
    {props.movies.map((movie) => (
      <div style={{width: '500px', height:'300px'}}>
    <Card>
      <Card.Body>
  <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
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
export default Films 