import "./Title.css";
import Description from "../description/Description";
import { useState } from "react";

function Title({ title, description }) {
  const [show, setShow] = useState(false);
  const Open = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="div_Input accordian">
        <h2 onClick={Open}>{title}</h2>
      </div>
      <div className="div_Input">
        {show && <Description description={description} />}
      </div>
    </div>
  );
}

export default Title;
