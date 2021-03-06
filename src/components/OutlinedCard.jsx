import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
 
export default class OutlinedCard extends React.Component {
	constructor() {
  
    super();
    
  }
  
   
   classes =  makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
   render() 
//<Router>
{ return  <div id="OutlineCard" className="div-card bg-light">
      <h2 className="div-title pb-5">
        Would you like to monitor with your Project?
      </h2>

      <div className="card-allign">
        <Card className={(this.classes.root, "cardview")} variant="outlined">
        <div className="form-group pull-right">            
        <Link to="/ProjectName" style={{float:"right", textDecoration:"none"}} onClick={this.handleClick}>
                <span variant="outlined" style={{margin:"20px", fontSize:"30px"}}>+
                </span>
                  </Link> 
                  </div>
          <CardContent>
            <Typography variant="h5" component="h2" class="cardheader">
              Project Name
              <CardActions>
                
              </CardActions>
            </Typography>

            <Typography variant="body2" component="p" class="carddescription">
              Learn what people are saying on the entire web about your brand,
              product or competitor
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>

        <Card className={(this.classes.root, "cardview")} variant="outlined">
        <div className="form-group pull-right">            
        <Link to="/ProjectDetails" style={{float:"right", textDecoration:"none"}} onClick={this.handleClick}>
                <span variant="outlined" style={{margin:"20px", fontSize:"30px"}}>+
                </span>
                  </Link> 
                  </div>
          <CardContent>
            <Typography variant="h5" component="h2" class="cardheader">
              Projects Details
              <CardActions>
                {" "}
                
              </CardActions> 
            </Typography>

            <Typography variant="body2" component="p" class="carddescription">
              Gather mentions from all your social media channels <br />
              {'"a   benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>

        <Card className={(this.classes.root, "cardview")} variant="outlined">
          <div className="form-group pull-right">            
        <Link to="/ProjectPublish" style={{float:"right", textDecoration:"none"}} onClick={this.handleClick}>
                <span variant="outlined" style={{margin:"20px", fontSize:"30px"}}>+
                </span>
                  </Link> 
                  </div>
          <CardContent>
            <Typography variant="h5" component="h2" class="cardheader">
              Publish
              <CardActions>
                          
              </CardActions>              
            </Typography>

            <Typography variant="body2" component="p" class="carddescription">
              Discover truly relevant mentions and get industry insights
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </div>

</div>
}
 handleClick(event) {
    document.getElementById("OutlineCard").style.display="none";

    
 } 
 
  
}

