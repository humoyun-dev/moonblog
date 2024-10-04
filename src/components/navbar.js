import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-100 border-bottom bg-dark" style={{ height: "70px" }}>
      <div className="container h-100">
        <div className="row gap-5 h-100 align-items-center">
          <div className="col">
            <div className="d-flex align-items-center position-relative">
              <input className="form-control bg-dark text-white " />
              <i
                className="bi bi-search position-absolute text-white"
                style={{ right: "10px" }}
              ></i>
            </div>
          </div>
          <Link
            to={"/"}
            className="d-flex justify-content-center align-items-center col gap-2 fw-bolder fst-italic text-warning"
          >
            <i className="bi fs-3 bi-moon-stars-fill"></i>
            <span className="fs-4">MoonBlog</span>
          </Link>
          <div className="col d-flex justify-content-end">
            <div className="dropdown">
              <button
                className="dropdown-toggle btn btn-outline-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={`/profile`}>
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item text-danger">Log Out</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
