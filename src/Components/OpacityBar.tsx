import React, { useState } from "react";
import { drawState } from "../../../memo-draw-engine/src";

function OpacityBar() {
  const [sliderValue, setSliderValue] = useState(100);

  const setOpacity = (e : React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setSliderValue(value)
    drawState.opacity = value / 100;
  }

  return (
    <div style={{background: 'white'}}>
      <input onChange={setOpacity} type="range" min="0" max="100" value={sliderValue} />
    </div>
  );
}

export default OpacityBar;