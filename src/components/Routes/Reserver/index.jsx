import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AppContexte } from "../../../App";
import Sprinter from "../../Sprinter";
import img from "../../../img/sprinter1.jpg";
import Voyage from "../../../class/Voyage";
export default function Reserver() {
  const { villes, voyages } = useContext(AppContexte);
  const { register, watch } = useForm();
  const indexVille = watch("lieuDepart", 0);
  const destination = Object.keys(villes[indexVille].destination);
  return (
    <div className="card bg-dark text-white sticky-top text-center" id="Villes">
      <h2 className="text-uppercase mb-4">
        Votre <strong>confort</strong>, notre priorité{" "}
      </h2>

      <div className="card-header border-success">
        <div className="card text-center">
          <div className="card-header text-dark ">Filtrer</div>
          <div className="card-body">
            <div className="row g-2">
              <div className="col-md">
                <div className="form-floating">
                  <select className="form-select" {...register("lieuDepart")}>
                    {villes.map((ville, index) => (
                      <option value={index} key={ville.nomVille}>
                        {ville.nomVille}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="floatingSelectGrid " className="text-dark">
                    Lieux de depart
                  </label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <select className="form-select">
                    {destination.map((v) => (
                      <option value="1" key={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="floatingSelectGrid" className="text-dark">
                    Votre destination
                  </label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <select className="form-select" {...register("nombrePlace")}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option value={n} key={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="floatingSelectGrid" className="text-dark">
                    Places
                  </label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input type="date" name="" id="" />
                  <label htmlFor="floatingSelectGrid" className="text-dark">
                    Date
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            <button className="btn btn-info">Rechercher</button>
          </div>
        </div>
      </div>

      <div className="card-body ">
        <h5 className="card-title">Resultats</h5>
        <br />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-lx-4 g-2">
          {voyages.map((v, i) => (
            <Voiture voyage={v} key={i} /> //key=v.id.toString()
          ))}
        </div>
      </div>
    </div>
  );
}
function Voiture({ voyage }) {
  if (!(voyage instanceof Voyage))
    throw new Error("voyage doit etre instance de Voyage");
  const { sprinter, lieuDepart, lieuDestination } = voyage;
  const prix =
    voyage.lieuDepart.destination[voyage.lieuDestination.nomVille].prixFrais;
  const [places, setUnite] = useState([]);
  const unite = places.length;
  const {achat}=useContext(AppContexte)
  return (
    <div className="col">
      <div className="card bg-secondary bg-opacity-25 w-100">
        <div className="card-header">
          <h5>
            {lieuDepart.nomVille} -- {lieuDestination.nomVille}
          </h5>
          <h6>
            {voyage.dateDepart} | {voyage.heureDepart}
          </h6>
        </div>
        <div className="card-body row">
          <div className="col">
            <h6 className="bg-opacity-25 rounded-4 text-bg-dark">
              Mr {sprinter.nomChauffeur}
            </h6>
            <Sprinter voyage={voyage} setUnite={setUnite} />
            <h6 className="bg-opacity-25 rounded-2 m-1 text-bg-dark">
              <span>Contacts Chauffeur</span>
              <br />
              <span className="border-bottom">{sprinter.num1}</span>
              <br />
              <span className="">{sprinter.num2}</span>
            </h6>
          </div>
          <div className="card col p-0" style={{ width: "18rem" }}>
            <img src={sprinter.img} className="card-img-top w-100 h-50" alt="..." />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">N° : {sprinter.numVoiture}</li>
              <li className="list-group-item">Prix : {prix} Ar</li>
              <li className="list-group-item">Unité : {unite}</li>
              <button
                className="list-group-item text-bg-dark bg-opacity-100 rounded-3 shadow"
                disabled={places.length === 0 ? true : false}
                onClick={() => {
                  achat.places=places
                  achat.prix=prix
                  achat.lieuDepart=lieuDepart.nomVille
                  achat.lieuDestination=lieuDestination.nomVille
                  achat.dateDepart=voyage.dateDepart
                  achat.heureDepart=voyage.heureDepart
                  achat.unite=unite
                  achat.init()
                }}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Reserver : {unite * prix} Ar
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
