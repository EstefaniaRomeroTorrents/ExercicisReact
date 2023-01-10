import "./Photo.css";
import BigPhoto from "../bigPhoto/BigPhoto";

function Photo() {
  const photos = [
    "https://cdn.pixabay.com/photo/2017/11/09/10/39/christmas-2933008__480.jpg",
    "https://img.freepik.com/foto-gratis/composicion-adornos-navidenos-interior_169016-5544.jpg?w=2000",
    "https://us.123rf.com/450wm/z1b/z1b2209/z1b220900534/z1b220900534.jpg?ver=6",
    "https://st4.depositphotos.com/5262935/21947/i/600/depositphotos_219474146-stock-photo-christmas-decorations-on-the-wooden.jpg",
    "https://st4.depositphotos.com/5262935/21947/i/600/depositphotos_219474146-stock-photo-christmas-decorations-on-the-wooden.jpg",
    "https://st4.depositphotos.com/5262935/21947/i/600/depositphotos_219474146-stock-photo-christmas-decorations-on-the-wooden.jpg",
  ];
  return (
    <>
      <div className="div_h1">
        <h1>Graella de Fotos</h1>
      </div>
      <div className="div_container">
        <div className="div_photo">
          {photos.map((photo, index) => (
            <BigPhoto src={photo} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Photo;
