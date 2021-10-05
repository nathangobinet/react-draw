import React, { useEffect, useRef } from 'react';
import { Engine, drawState, ShapeType } from '../../memo-draw-engine/src/index';
import ColorBar from './Components/ColorBar';
import ShapeBar from './Components/ShapeBar';
import NetworkManager from './Services/NetworkManager';

function DrawEngine() {
  const canvasRef = useRef();
  let engine : Engine;

  useEffect(() => {
    engine = new Engine(canvasRef.current, new NetworkManager());
    drawState.shapeType = ShapeType.Pencil;
  }, []);  

  return (
    <div>
      <canvas width="800" height="600" ref={canvasRef}></canvas>
      <ColorBar />
      <ShapeBar></ShapeBar>
    </div>
    
  );
}

export default DrawEngine;
