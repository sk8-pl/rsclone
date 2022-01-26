import "./style.css";

const Collage = () => {
  return (
    <div className="collage">
      <div className="collage-right">
        <div className="collage-img_right collage-img"></div>
        {/* <img src="https://via.placeholder.com/1000x500" alt="image-room" /> */}
      </div>

      <div className="collage-left">
        <div className="collage-img_left collage-img"></div>
        <div className="collage-img_left collage-img"></div>
        {/* <img src="https://via.placeholder.com/1000x500" alt="image-room" />
        <img src="https://via.placeholder.com/1000x500" alt="image-room" /> */}
      </div>
    </div>
  );
};

export default Collage;
