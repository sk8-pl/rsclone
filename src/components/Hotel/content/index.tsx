import InnerLeft from "./inner-left";
import InnerRight from "./inner-right";
import "./style.css";

const ContentHotel = () => {
  return (
    <div className="container">
      <div className="container-room">
        <InnerLeft />
        <InnerRight />
      </div>
    </div>
  );
};

export default ContentHotel;
