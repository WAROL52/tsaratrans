/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { AppContexte } from "../App";

export default function Tarifs() {
  const { villes } = useContext(AppContexte);
  return <NavVille villes={villes} />;
}

function NavVille({ villes }) {
  const [villeSelected, changerVille] = useState(villes[0]);
  const listVille = villes.map((ville) => (
    <li className="nav-item " key={ville.nomVille}>
      <a
        className={ville === villeSelected ? "nav-link active" : "nav-link"}
        aria-current="page"
        href={ville.nomVille}
        onClick={(e) => {
          e.preventDefault();
          changerVille(ville);
        }}
      >
        {ville.nomVille}
      </a>
    </li>
  ))
  const listDestination = getListDestination(villeSelected.destination)
  return (
      <div className="card bg-dark text-white sticky-top text-center" id="Villes">
        <h2 className="text-uppercase mb-4">
                  Votre <strong>confort</strong>, notre priorité{" "}
                </h2>

        <div className="card-header border-success">
          <ul className="nav nav-tabs  card-header-tabs">{listVille}</ul>
        </div>
        <div className="card-body ">
          <h5 className="card-title">{villeSelected.nomVille}</h5>
          <p className="card-text">{villeSelected.desc}</p>
          <div className="row row-cols-1  row-cols-md-3 g-4" >
            {listDestination}
          </div>
        </div>
      </div>
  );
}

function getListDestination(destination){
  return Object.entries(destination).map(([nomDestination,{ prixFrais, ville }] ) => {
    return (
      <div className="col" key={nomDestination}>
        <div className="card shadow border-success bg-dark h-100">
          <img src={ville.img} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{nomDestination}</h5>
            <p className="card-text">{ville.desc}</p>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-success"
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-success"
                >
                  Edit
                </button>
              </div>
              <small className="text-muted">{prixFrais} Ar</small>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
