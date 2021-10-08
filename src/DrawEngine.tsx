import React, { useEffect, useRef } from 'react';
import { Engine, drawState, ShapeType } from '../../memo-draw-engine/src/index';
import ColorBar from './Components/ColorBar';
import OpacityBar from './Components/OpacityBar';
import ShapeBar from './Components/ShapeBar';
import ThicknessBar from './Components/ThicknessBar';
import NetworkManager from './Services/NetworkManager';

function DrawEngine() {
  const canvasRef = useRef();
  let engine : Engine;

  useEffect(() => {
    engine = new Engine(canvasRef.current, new NetworkManager());
    drawState.shapeType = ShapeType.Pencil;
    drawState.thickness = 5;
  }, []);  

  return (
    <div>
      <canvas width="800" height="600" ref={canvasRef}></canvas>
      <ColorBar />
      <ShapeBar />
      <OpacityBar />
      <ThicknessBar />
    </div>
    
  );
}

export default DrawEngine;
