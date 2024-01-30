import React from "react";
import { Link } from "react-router-dom";
import logo from "../favicon_io/favicon-32x32.png";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img src={logo} alt="img" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                {props.data.nav1}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/" + props.data.nav2}>
                {props.data.nav2}
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link className="btn btn-outline-success" to="/create-todo">
              Add Todo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
