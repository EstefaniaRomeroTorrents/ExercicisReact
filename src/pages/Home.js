import "./Home.css";
import Display from "../exercicis/Comptador/components/display/Display";
import Photo from "../exercicis/Graella/components/photo/Photo";
import Acordio from "../exercicis/Acordio/components/acordio/Acordio";

function Home() {
  return (
    <div className="div_pare">
      <Photo />
      <Display />
      <Acordio />
    </div>
  );
}

export default Home;
