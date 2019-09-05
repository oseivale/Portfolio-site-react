import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Angular from './angular';
import Reactprojects from './react';
import Rails from './rails';
import Node from './nodeprojects';
import Wordpress from './wordpress';
import { Link } from 'react-router-dom';

const nodeComponent = <Node />;
const wordpressComponent = <Wordpress />;
const railsComponent = <Rails />;
const reactComponent = <Reactprojects />;
const angularComponent = <Angular />;

function Projects() {
   
        return (
            <React.Fragment>
            <div>
                
  <div class="row">
    <div class="col s12">
      <ul class="tabs ">
        <li class="tab col s3"><Link to="#test1">Wordpress</Link></li>
        <li class="tab col s3"><Link to="#test2">NodeJS</Link></li>
        <li class="tab col s3"><Link to="#test4">Rails</Link></li>
        <li class="tab col s3"><Link to="#test5">React</Link></li>
        <li class="tab col s3"><Link to="#test6">Angular</Link></li>
      </ul>
    </div>
    <div id="test1" className="col s12"></div>
    <div id="test2" class="col s12"></div> 
    <div id="test4" class="col s12"></div>
    <div id="test5" class="col s12"></div>
    <div id="test6" class="col s12"></div>
  </div>
            </div>
            </React.Fragment>
        )
    
}

export default Projects;