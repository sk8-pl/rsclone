import FormBooking from "./modal-booking/form-booking";
import "./style.css";
import MapContainer from "./map-container";
import { Button } from "antd";
import ModalForm from "./modal-booking";

const InnerRight = () => {
  return (
    <div className="inner-right">
      <MapContainer lng={-71.0815} lat={42.3445} />
      {/* <Button type="primary">Забронировать</Button>{" "} */}
      <ModalForm />
    </div>
  );
};

export default InnerRight;
