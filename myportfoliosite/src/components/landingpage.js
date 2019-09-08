import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './landingpage.css';

class Landing extends React.Component {
   
  render() {
      return (
          
  <div class="row">
    <div class="col s6 offset-s3 center-align ">
      <div class="card">
        <div class="card-image">
          <img className="myface" src="images/L3DOM-44V5P05_AmankwahD_05.jpg" />
          {/* <span class="card-title">Valerie Osei</span> */}
        </div>
        <div class="card-content blue accent-2">
        <h3 class="white-text">Full Stack Web Developer</h3>
        <span class="white-text subline">HTML/CSS | Bootstrap | JavaScript | Ruby | React | Angular | Express
        </span>
        </div>
        <div class="card-action">
          <a href="#" className="blue-text text-accent-2">Learn More</a>
        </div>
      </div>
    </div>
  </div>
          
        
      );
  }
    
}

export default Landing;

      {/* <img className="circle responsive-img" src="/images/rose.jpeg" alt="" />
          
          <div className="row">
    <div class="col s6 offset-s3 center-align">
      <div className="card-panel blue accent-2 ">
        <h1 class="white-text">Full Stack Web Developer</h1>
        <span class="white-text subline">HTML/CSS | Bootstrap | JavaScript | Ruby | React | Angular | Express
        </span>
        
      </div>
    </div>
  </div> */}