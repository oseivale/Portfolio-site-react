import React from 'react';
import Landing from './components/landingpage';
import Resume from './components/resume';
import About from './components/aboutme';
import Projects from './components/projects';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    // Define the routes
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/aboutme" component={About}/> 
          <Route path="/projects" component={Projects}/> 
          <Route path="/resume" component={Resume}/> 
        </Switch>
      </div> 
    </Router>
 
  
  );
}

  
  


export default App;
