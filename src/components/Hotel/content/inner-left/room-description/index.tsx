import RoomCancel from "./room-cancel";
import RoomRule from "./room-rule";
import "./style.css";

const RoomDescription = () => {
  return (
    <div className="room-description">
      <RoomRule />
      <RoomCancel />
    </div>
  );
};

export default RoomDescription;
