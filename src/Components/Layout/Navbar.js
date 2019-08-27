import React,{Component} from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';


const Navbar = (props) =>{
    
    console.log(props)
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-log">Movies Website</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;