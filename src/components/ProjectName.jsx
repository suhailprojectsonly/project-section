
import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,  Button } from 'react-bootstrap';
import '../index.css';


class ProjectName extends React.Component {
    render() { 
        return ( 
            

<div class="project-div">
<Link to="/" onClick={this.handleClick}>
<Button variant="outlined">Home
</Button>
</Link>

<Form >
  <Form.Group className="projectnamebox">
    <Form.Label>Project Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Project Name" />
  </Form.Group>

  <Form .Group className="projectnamebox">
    <Form.Label>Type</Form.Label>
    <Form.Control type="text" placeholder="Enter Project Title" />
    <Form.Text className="text-muted">
      (Software/Manufacturin/Construction/Research.)    
    </Form.Text>
  </Form.Group>
  <div className="pl-4 pb-2">
  <Link to="/" >
  <Button variant="primary" type="submit" onClick={this.handleClick} >
    Submit
  </Button>
  </Link>
  </div>
 
</Form>
  </div>
        );
    }

    handleClick(event) {
        document.getElementById("OutlineCard").style.display="block";
     } 
    
}
 
export default ProjectName;