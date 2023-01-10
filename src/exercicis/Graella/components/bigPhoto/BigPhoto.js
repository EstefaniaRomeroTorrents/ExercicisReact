import "./BigPhoto.css";
import { useState } from "react";

function BigPhoto({ src }) {
  const [full, setFull] = useState(false);
  const resize = () => {
    setFull((previous) => !previous);
  };

  return (
    <>
      <div>
        <img
          src={src}
          alt=""
          onClick={resize}
          className={full ? "fullSize" : "normalSize"}
        />
      </div>
    </>
  );
}

export default BigPhoto;
