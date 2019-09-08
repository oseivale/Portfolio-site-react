import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Angular from './angular';
import Reactprojects from './react';
import Rails from './rails';
import Node from './nodeprojects';
import Wordpress from './wordpress';
import { Link } from 'react-router-dom';
import './projects.css';



export default class Projects extends Component{


    render(){
    
    return(
        
        <div class="container row col s6">
            <h1 class="blue-text text-darken-3">My Projects</h1>

    <ul class="collapsible blue-text text-darken-3">
    <li>
      <div class="collapsible-header hoverable" >Rails</div>
      <div class="collapsible-body"><span><Rails /></span></div>
    </li>
    <li>
      <div class="collapsible-header hoverable">Angular</div>
      <div class="collapsible-body"><span><Angular /></span></div>
    </li>
    <li>
      <div class="collapsible-header hoverable">Wordpress</div>
      <div class="collapsible-body"><span><Wordpress /></span></div>
    </li>
    <li>
      <div class="collapsible-header hoverable">Node & Express</div>
      <div class="collapsible-body"><span><Node /></span></div>
    </li>
    <li>
      <div class="collapsible-header hoverable">React</div>
      <div class="collapsible-body"><span><Reactprojects /></span></div>
    </li>
  </ul>
    </div>
        )
    }

}


