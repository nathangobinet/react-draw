import React from "react";
import { drawState, Color } from "../../../memo-draw-engine/src";

const colors : Array<Color> = [
  new Color(0, 0, 0),
  new Color(125, 125, 125),
  new Color(255, 255, 255),
  new Color(255, 0, 0),
  new Color(170, 37, 37),
  new Color(255, 230, 0),
  new Color(255, 184, 0),
  new Color(180, 131, 7),
  new Color(29, 229, 0),
  new Color(24, 182, 59),
  new Color(0, 255, 209),
  new Color(21, 171, 236),
  new Color(18, 40, 240),
  new Color(112, 0, 255),
  new Color(232, 21, 223),
]

function ColorBox({color} : {color: Color}) {
  function setColor() {
    console.log(color);
    drawState.color = color;
  }

  return (
    <button onClick={setColor}>
      <svg width="30" height="30">
        <rect fill={color.toRgb()} x="0" y="0" width="30" height="30"/>
      </svg>
    </button>
  );
}

export default function ColorBar() {
  return (
    <div>
      {colors.map((color) => <ColorBox key={color.toRgb()} color={color} />)}
    </div>
  )
}
