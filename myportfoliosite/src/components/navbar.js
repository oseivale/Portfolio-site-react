import React, {Component} from 'react';
import M from "materialize-css";
import { Link } from 'react-router-dom';

class Navbar extends Component {

componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
}

render() {
    return(
        <div>
            <nav class="nav-extended blue darken-3">
                <div class="nav-wrapper">
                    <Link to="/" class="brand-logo">Valerie Osei</Link>
                    <Link to="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></Link>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><Link to="/aboutme">About</Link></li>
                            <li><Link to="/projects">My Projects</Link></li>
                            <li><Link to="/resume">My Resume</Link></li>
                        </ul>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
                <li><Link className="blue-text text-darken-4" to="/aboutme">About</Link></li>
                <li><Link className="blue-text text-darken-4" to="/projects">My Projects</Link></li>
                <li><Link className="blue-text text-darken-4" to="/resume">My Resume</Link></li>
            </ul>
        </div>
        )
    }
}

export default Navbar;        


