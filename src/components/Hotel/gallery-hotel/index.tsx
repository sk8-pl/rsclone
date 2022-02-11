import ImageHotel from "./image-hotel";
import "./style.css";

interface CollageInterface {
  idHotel: number;
}

const Collage = (props: CollageInterface) => {
  return (
    <div className="collage">
      <div className="collage-right">
        <div className="collage-img_right collage-img">
          <ImageHotel num={0} idHotel={props.idHotel} />
        </div>
      </div>

      <div className="collage-left">
        <div className="collage-img_left collage-img">
          <ImageHotel num={1} idHotel={props.idHotel} />
        </div>
        <div className="collage-img_left collage-img">
          <ImageHotel num={2} idHotel={props.idHotel} />
        </div>
        {/* <img src="https://via.placeholder.com/1000x500" alt="image-room" />
        <img src="https://via.placeholder.com/1000x500" alt="image-room" /> */}
      </div>
    </div>
  );
};

export default Collage;
