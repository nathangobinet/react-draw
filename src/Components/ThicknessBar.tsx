import React from "react";
import { drawState } from "../../../memo-draw-engine/src";

const availableThickness = [
  3, 5, 10
];


function ThicknessBox({ thickness} : { thickness: number }) {
  const setThickness = () => {
    drawState.thickness = thickness;
  }

  return (
    <button onClick={setThickness}>
      <svg width="30" height="30">
        <circle fill="#000000" cx="15" cy="15" r={thickness} />
      </svg>
    </button>
  );
}

function ThicknessBar() {
  return (
    <div className= "flex">
      {availableThickness.map((thickness) => <ThicknessBox thickness={thickness} />)}
    </div>
  );
}

export default ThicknessBar;