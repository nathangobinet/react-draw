import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { Engine, drawState, ShapeType } from 'memo-draw-engine';
import ColorBar from './Components/ColorBar';
import OpacityBar from './Components/OpacityBar';
import ShapeBar from './Components/ShapeBar';
import ThicknessBar from './Components/ThicknessBar';
import NetworkManager from './Services/NetworkManager';

function DrawEngine() {
  const [backgroundStyle, setBackgroundStyle] = useState<CSSProperties>();
  const canvasRef = useRef<HTMLCanvasElement>();
  let engine: Engine;

  useEffect(() => {
    engine = new Engine(canvasRef.current, new NetworkManager());
    engine.eventManager.registerDefaultCanvasAndDocumentEvents();
    drawState.shapeType = ShapeType.Pencil;
    drawState.thickness = 5;
    initBackgroundStyle();
  }, []);

  const initBackgroundStyle = (): void => {
    setBackgroundStyle({
      position: 'absolute',
      backgroundColor: 'white',
      zIndex: -2,
      width: `${canvasRef.current.width}px`,
      height: `${canvasRef.current.height}px`,
    });
  };

  return (
    <div>
      <div style={backgroundStyle}></div>
      <canvas width="800" height="600" ref={canvasRef}></canvas>
      <ColorBar />
      <ShapeBar />
      <OpacityBar />
      <ThicknessBar />
    </div>
  );
}

export default DrawEngine;
