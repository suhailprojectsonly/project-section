
import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,  Button } from 'react-bootstrap';
import '../index.css';


class ProjectPublish extends React.Component {
    render() { 
        return (  
            <div class="project-div">

<Form >
  
  <div className="projectnamebox">
    <label for="exampleFormControlFile1">Upload Project</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>

  <Form.Group className="projectnamebox pt-3">
    <Form.Control type="text" placeholder="Additional Information(Optional)" />
  </Form.Group>

  <div className="pl-4 pb-3 pt-2">
  <Button variant="primary" type="submit" >
    Upload
  </Button>
  </div>
 
</Form> 
</div>
    
        );
    }
}
 
export default ProjectPublish;