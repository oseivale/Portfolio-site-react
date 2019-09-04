import React from 'react';
import Landing from './components/landingpage';
import Resume from './components/resume';
import About from './components/aboutme';
import Projects from './components/projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // Define the routes
    <Router>
      <div>
        <Route path="/aboutme" component={About}/> 
        <Route path="/landingpage" component={Landing}/> 
        <Route path="/projects" component={Projects}/> 
        <Route path="/resume" component={Resume}/> 
      </div> 
    </Router>
 
  
  );
}

  
  


export default App;
