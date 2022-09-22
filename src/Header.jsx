/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useContext } from "react";
// import { AppContexte } from "./App";

import { useState } from "react";
import { Link } from "react-router-dom";
const navList = ["Accueil", "Reserver"];

export default function Header() {
  const [navSelected, switchNav] = useState(navList[0]);
  const handleNav = (item) =>switchNav(item);
  return (
    <nav className="navbar navbar-expand-md border-bottom border-danger shadow   navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#" to={"/"} >
          <img src="img/logo.png" alt="Site logo" />
          Tsaratrans
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end col-sm-12"
          id="navbarCollapse"
        >
          <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
            {navList.map((item) => (
              <li
                className="nav-item"
                onClick={() => handleNav(item)}
                key={item}
              >
                <Link
                  to={"/"+item}
                  className={
                    "nav-link " + (item === navSelected ? "active" : "")
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
