import CustomSeparator from "./components/Breadcrumb";
import PrimarySearchAppBar from "./components/Navigation";
import OutlinedCard from "./components/OutlinedCard";
import "./index.css";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import ProjectName from './components/ProjectName';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <div>
      
      <PrimarySearchAppBar />
      <CustomSeparator />
     <OutlinedCard/>

      
    </div>
  );
}

export default App;
