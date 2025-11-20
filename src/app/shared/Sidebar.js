import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Sidebar extends Component {

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          
          
          <li className="nav-item nav-profile">
            <a href="!#" className="nav-link" onClick={evt =>evt.preventDefault()}>
              <div className="nav-profile-image">
                <img src={ require("../../assets/images/faces/face1.jpg") } alt="profile" />
              </div>
              <div className="nav-profile-text">
                <span className="font-weight-bold mb-2">Aloeng</span>
              </div>
            </a>
          </li>

          
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-title">Dashboard</span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
          </li>

          
          <li className={ this.isPathActive('/general-pages/blank-page') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/general-pages/blank-page">
              <span className="menu-title">Blank Page</span>
              <i className="mdi mdi-file menu-icon"></i>
            </Link>
          </li>

        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Sidebar);
