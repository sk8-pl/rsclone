import Recall from "./recall";
import RoomDescription from "./room-description";
import RoomRating from "./room-rating";
import Worth from "./room-worth";
import "./style.css";

const InnerLeft = () => {
  return (
    <div className="inner-left">
      <div className="item-container">
        <Worth />
        <RoomRating />
      </div>
      <Recall />
      <RoomDescription />
    </div>
  );
};

export default InnerLeft;
