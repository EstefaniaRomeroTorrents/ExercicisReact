import "./Acordio.css";
import Array from "../array/Array";

function Acordio({ title }) {
  return (
    <>
      <div className="div_h1">
        <h1>Acordió</h1>
      </div>
      <div className="div_container">
        <Array />
      </div>
    </>
  );
}

export default Acordio;
