import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/news">Home</Link>  </li> */}
                               
                            </ul>
                            <div class="dropdown">
                                <button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Country
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/news/in">India</Link></li>
                                    <li><Link class="dropdown-item" to="/news/au">Australia</Link></li>
                                    <li><Link class="dropdown-item" to="/news/us">United States</Link></li>
                                    <li><Link class="dropdown-item" to="/news/en">United Kingdom</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
