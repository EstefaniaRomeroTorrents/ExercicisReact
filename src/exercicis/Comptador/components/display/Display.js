import "./Display.css";
import { useState } from "react";

function Display() {
  const [count, setCount] = useState(0);

  const operate = (num) => {
    console.log("Valor:", num);
    setCount((counter) =>
      counter + num < 0 ? 0 : counter + num > 10 ? 10 : counter + num
    );
  };

  return (
    <>
      <div className="div_h1">
        <h1>Comptador</h1>
      </div>
      <div className="div_container">
        <div className="div_calc">
          <div className="div_Input">
            <input type="text" value={count} size="2" />
          </div>
          <div className="div_Input_button">
            <button onClick={() => operate(1)}>+ 1</button>
            <button onClick={() => operate(-1)}>- 1</button>
            <button onClick={() => operate(5)}>+ 5</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
