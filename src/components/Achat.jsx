import React, { useContext, useRef, useState } from "react";
import { AppContexte } from "../App";
import Cleave from "cleave.js/react";
import { useForm } from "react-hook-form";
import { Toast } from "bootstrap"
import Client from "../class/Client";

export default function Achat() {
  const { achat,update } = useContext(AppContexte);
  const [, init] = useState(Math.random());
  let nom = "";

  let prenom = "";
  let tel = "";
  achat.init = () => init(Math.random());
  console.log("init", achat);
  function save() {
    const client=new Client(nom,prenom,tel)
    achat.places.map(place=>achat.voyage.creerBillet(client,place))
    alert("Achat Effectué...");
    update()
  }
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Confirmation
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="">
                <h6>{achat.lieuDepart} -- {achat.lieuDestination}</h6>
                places selectionné : {achat.places.sort((a,b)=>a-b).join(", ")} <br />
                Montant Total : {achat.prix*achat.unite} Ar
            </div>
            <div className="input-group">
              <span className="input-group-text">Nom et Prenom {nom} </span>
              <Cleave
                onChange={(event) => (nom = event.target.value)}
                aria-label="First name"
                className="form-control"
                placeholder="Votre nom..."
              />
              <Cleave
                onChange={(event) => (prenom = event.target.value)}
                aria-label="First name"
                className="form-control"
                placeholder="Votre prenom..."
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Tel
              </span>
              <Cleave
                onChange={(event) => (tel = event.target.value)}
                options={{
                  prefix: 0,
                  blocks: [1, 2, 2, 3, 2],
                  // numeral:true,
                  numericOnly: true,
                }}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Annuler
            </button>
            <button
              onClick={save}
              data-bs-dismiss="modal"
              type="button"
              className="btn btn-primary"
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
