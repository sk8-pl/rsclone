import "./style.css";

interface HotelNameStr {
  name: string;
}

const HotelName = (props: HotelNameStr) => {
  return <h2 className="hotel-title">{props.name}</h2>;
};

export default HotelName;
