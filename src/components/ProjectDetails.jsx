import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,  Button } from 'react-bootstrap';
import '../index.css';
class ProjectDetails extends React.Component {
    render() { 
        return ( 
<div class="project-div">
    
 <Link to="/" onClick={this.handleClick}>
<Button variant="outlined">Home
</Button>
</Link>

<Form >
    <div class="pl-3 pr-3 pt-2">
    <Form.Group > 
  <label for="comment" class="font-weight-bold">Please Provide descriptions of your project:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
  </Form.Group>
    </div>
    <div className="pl-4 pb-2">
    <Link to="/" >
  <Button variant="primary" type="submit" onClick={this.handleClick} >
    Submit
  </Button>
  </Link>

  <Link to="/" onClick={this.handleClick} class="pl-2">
<Button variant="primary">Home
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
 
export default ProjectDetails;
