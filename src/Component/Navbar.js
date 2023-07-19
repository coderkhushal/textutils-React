import React from 'react'
import PropTypes from 'prop-types'
// import { useState } from "react"
import { Link }  from 'react-router-dom'
export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode==="light"?"light":"dark"} bg-${props.Mode==="light"?"light":"dark"}`} id='navbar'>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link active"  to="/">Home</Link> 
         </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/About">About</Link>
          </li>

        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
      </form> */}
        <button type="button" onClick={props.toggleMode} id="light" className="btn btn-light">Light Mode</button>
        <button type="button" onClick={props.toggleMode} id="blue" className="btn btn-primary">Blue Mode</button>
        <button type="button" onClick={props.toggleMode} id="grey" className="btn btn-secondary">Grey Mode</button>
        <button type="button" onClick={props.toggleMode} id="green"  className="btn btn-success">Green Mode</button>
        <button type="button" onClick={props.toggleMode} id="red" className="btn btn-danger">Red Mode</button>
        <button type="button" onClick={props.toggleMode} id="yellow" className="btn btn-warning">Yellow Mode</button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string,

}

Navbar.defaultProps = {
  title: 'title here',
  abouttext: "about text here",
  hometext: "hometext here"
}