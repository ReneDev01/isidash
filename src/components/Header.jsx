import React, {} from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line arrow-parens
function Header(){
      return (
            <div>
                  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                              <NavLink className="nav-link" data-widget="pushmenu" to="#" role="button"><i className="fas fa-bars" /></NavLink>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                              <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        
                        </ul>
                        <ul className="navbar-nav ml-auto">
                        {/* Notifications Dropdown Menu */}
                        <li className="nav-item">
                              <NavLink className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" to="#" role="button">
                              <i className="fas fa-th-large" />
                              </NavLink>
                        </li>
                        </ul>
                  </nav>

            </div>     
      )
}

export default Header;