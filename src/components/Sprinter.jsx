import React, { useState } from "react";
// import { useSelector } from "react-redux";

const Sprinter = function Sprinter({ voyage, setUnite }) {
  const Passagers=voyage.Passagers
  const listPlace = [];
  const placeOccuper = Passagers.map((b) => b.numeroPlace);
  for (let indexPlace = 0; indexPlace < 18; indexPlace++) {
    let isOccuper = placeOccuper.includes(indexPlace + 1);
    listPlace.push(
      <Place
        r={() => {}}
        numero={indexPlace + 1}
        setUnite={setUnite}
        isOccuper={isOccuper}
        key={indexPlace}
      />
    );
  }
  return (
    <div
      style={{
        width: "150px",
        height: "225px",
        display: "inline-block",
      }}
      className="container bg-white rounded shadow"
    >
      <div className="row">
        <div className=" sm col border rounded bg-secondary ">👮‍♂️</div>
        <button className="btn m-1 btn-white border-white text-white btn-sm col disabled"></button>
        {listPlace.slice(0, 2)}
        <div className="m-1 sm col"></div>
        <hr />
      </div>

      <div className="row">{listPlace.slice(2, 6)}</div>

      <div className="row">{listPlace.slice(6, 10)}</div>

      <div className="row">{listPlace.slice(10, 14)}</div>

      <div className="row">{listPlace.slice(14)}</div>
    </div>
  );
};

export default Sprinter;
function Place({ numero = 0, isOccuper = false, theme = "dark", setUnite }) {
  let colorSuccess = "btn-success";
  let colorOutline = "btn-white";
  if (theme === "dark") {
    colorOutline = "btn-dark";
  }
  let [color, setColor] = useState(colorOutline);
  if (isOccuper) {
    isOccuper = "disabled";
    color = "btn-secondary";
  }
  const className = `p-1 btn m-1 ${color} btn-sm col  shadow ` + isOccuper;
  return (
    <button
      onClick={() => {
        setColor(color === colorOutline ? colorSuccess : colorOutline);
        setUnite((u) =>
          color === colorOutline
            ? [...u, numero]
            : [...u.filter((n) => n !== numero)]
        );
      }}
      className={className}
    >
      {isOccuper ? "🚫" : numero}
    </button>
  );
}
