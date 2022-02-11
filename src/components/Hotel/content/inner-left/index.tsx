import Recall from "./recall";
import RoomDescription from "./room-description";
import RoomRating from "./room-rating";
import Worth from "./room-worth";
import "./style.css";

const InnerLeft = (props: any) => {
  return (
    <div className="inner-left">
      <div className="item-container">
        <Worth />
        <RoomRating score={props.score} scoreText={props.scoreText} />
      </div>
      <Recall />
      <RoomDescription />
    </div>
  );
};

export default InnerLeft;
