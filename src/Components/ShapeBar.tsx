import React from "react";
import { drawState, ShapeType } from "memo-draw-engine";

const shapes : Array<{ name: string, type: ShapeType }> = [
  { name: 'Pencil', type: ShapeType.Pencil },
  { name: 'Fill', type: ShapeType.Fill },
  { name: 'Line', type: ShapeType.Line },
  { name: 'EllipseFull', type: ShapeType.EllipseFull },
  { name: 'EllipseStroke', type: ShapeType.EllipseStroke },
  { name: 'RectangleFull', type: ShapeType.RectangleFull },
  { name: 'RectangleStroke', type: ShapeType.RectangleStroke },
]

function ShapeBox({name, type} : { name: string, type: ShapeType}) {
  function setShape() {
    drawState.shapeType = type;
  }

  return (
    <button onClick={setShape} className="shapeButton">{name}</button>
  );
}

export default function ShapeBar() {
  return (
    <div className= "flex">
      { shapes.map((shape) => <ShapeBox key={shape.name} name={shape.name} type={shape.type} />) }
    </div>
  );
};
