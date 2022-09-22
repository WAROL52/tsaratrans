/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext, useState } from "react";
import { AppContexte } from "./App";
import Contacte from "./components/Contacte";
import Tarifs from "./components/Tarifs";
// import TopDestination from './components/TopDestination'
import sprinter1 from "./img/sprinter1.jpg";
import sprinter2 from "./img/sprinter2.jpg";
import sprinter3 from "./img/sprinter3.jpg";
import sprinter4 from "./img/sprinter4.jpg";
const strinters = [sprinter1, sprinter2, sprinter3, sprinter4];
export default function Main() {
  const { villes } = useContext(AppContexte);

  return (
    <div className="tm-page-wrap bg-dark text-white mx-auto" id="Accueil">
      <Accueil villes={villes} />
      <Contacte />
      <div
        className="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <div className="dropdown mt-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Accueil({ villes }){
  return <Carousel villes={villes}/>
}

function Carousel({ villes }) {
  return (
    <div className="carousel slide carousel-fade" data-bs-ride="false">
      <div className="carousel-inner">
        {strinters.map((ville, indexVille) => (
          <div
            key={ville}
            className={indexVille ? "carousel-item" : "carousel-item active"}
          >
            <img
              src={ville}
              className="d-block w-100"
              alt="..."
              style={{ height: "50vw" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <Caption villes={villes} />
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#Reservation"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          id="Reservation"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#Reservation"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function Caption({ villes }) {
  const [villeDepart, changerVilleDestination] = useState(villes[0]);
  const optionsDepart = villes.map((ville, index) => (
    <option value={index} key={ville.nomVille}>
      {ville.nomVille}
    </option>
  ));
  const optionsDestination = Object.entries(villeDepart.destination).map(
    ([nomVilleDestination], index) => (
      <option value={nomVilleDestination} key={nomVilleDestination}>
        {nomVilleDestination}
      </option>
    )
  );
  return (
    <div>
      <p>
        <a
          className="btn btn-dark"
          data-bs-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Reserver
        </a>
        <button
          className="btn btn-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          Options
        </button>
        <button
          className="btn btn-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".multi-collapse"
          aria-expanded="false"
          aria-controls="multiCollapseExample1 multiCollapseExample2"
        >
          Reserver + Options
        </button>
      </p>
      <div className="row ">
        <div className="col ">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card card-body bg-dark">
              <div className="card bg-dark text-center">
                <div className="card-header">Choisissez votre itinéraire</div>
                <div className="card-body">
                  <div className="row g-2">
                    <div className="col-md">
                      <div className="form-floating">
                        <select
                          className="form-select bg-dark text-white"
                          id="floatingSelectGrid"
                          onChange={(e) =>
                            changerVilleDestination(villes[e.target.value])
                          }
                        >
                          {optionsDepart}
                        </select>
                        <label htmlFor="floatingSelectGrid">Lieux de depart</label>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="form-floating">
                        <select
                          className="form-select bg-dark text-white"
                          id="floatingSelectGrid"
                        >
                          {optionsDestination}
                        </select>
                        <label htmlFor="floatingSelectGrid">
                          Lieux de destination
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="input-group input-group-sm  mb-3">
                    <label
                      className="input-group-text text-dark"
                      htmlFor="inputGroupSelect01"
                    >
                      Places
                    </label>
                    <select
                      className="form-select bg-dark text-white"
                      id="inputGroupSelect01"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>

                    <span className="input-group-text">Date</span>
                    <input
                      type="date"
                      className="form-control bg-dark text-white"
                      placeholder="Server"
                      aria-label="Server"
                    />
                  </div>
                </div>
                <div className="card-footer text-muted">
                  <a
                    className="btn btn-outline-light"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                  >
                    Reserver
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body bg-dark">
              Some placeholder content for the second collapse component of this
              multi-collapse example. This panel is hidden by default but
              revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
