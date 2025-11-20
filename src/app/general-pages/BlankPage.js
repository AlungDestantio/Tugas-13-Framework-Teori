import React, { Component } from 'react'

export class BlankPage extends Component {
  render() {
    return (
      <div>
        {/* Page Header dengan Title */}
        <div className="page-header">
          <h3 className="page-title">Blank Page</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={event => event.preventDefault()}>General Pages</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Blank Page
              </li>
            </ol>
          </nav>
        </div>

        {/* Main Content Card */}
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Main Content Area</h4>
                <p className="card-description">
                  This is a blank page template. You can start adding your content here.
                </p>
                
                <div className="mt-3">
                  <h5>Features</h5>
                  <ul>
                    <li>Responsive layout with Bootstrap grid system</li>
                    <li>Clean and modern design using Purple React template</li>
                    <li>Easy to customize and extend with React components</li>
                    <li>Includes navigation breadcrumb for better user experience</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h5>Description</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlankPage