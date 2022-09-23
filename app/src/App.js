import React, {useState} from 'react';
import './App.css';

function App() {


  const [selectedColor, setSelectedColor] = useState("roja")

  return (
    <div className="semaforo">
      <div onClick={() => setSelectedColor("roja")} className={"luz roja" + (selectedColor === "roja" ? " glow" : "")}></div>
      <div onClick={() => setSelectedColor("amarilla")} className={"luz amarilla" + (selectedColor === "amarilla" ? " glow" : "")}></div>
      <div onClick={() => setSelectedColor("verde")} className={"luz verde" + (selectedColor === "verde" ? " glow" : "")}></div>
    </div>
  );
}

export default App;
