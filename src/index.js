import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import ProjectName from './components/ProjectName';
import ProjectDetails from './components/ProjectDetails';
import ProjectPublish from './components/ProjectPublish';

ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
    <Route path="/ProjectName" component={ProjectName} />
    <Route path="/ProjectDetails" component={ProjectDetails} />
    <Route path="/ProjectPublish" component={ProjectPublish} />
  </Router>), 
  document.getElementById('root')
);


