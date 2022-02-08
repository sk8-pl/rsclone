import { Rate } from "antd";
import { useState } from "react";
import "./style.css";

const HotelCard = (props: any) => {
  const [favorite, setFavorite] = useState(false);
  console.log(props.data.review_score / 2);
  return (
    <div className="hotel-card">
      <div
        className="hotel-card-img"
        style={{ backgroundImage: `url(${props.data.max_photo_url})` }}
      >
        <div
          className={`favorite-icon ${favorite ? "favorite" : ""}`}
          onClick={() => setFavorite(!favorite)}
        ></div>
      </div>
      <span className="hotel-name">
        <b>{props.data.hotel_name_trans}</b>
      </span>
      <span className="hotel-description">{props.data.address_trans}</span>
      <div className="hotel-card-info">
        <span>{props.data.distance_to_cc}км до центра</span>
        <span>
          <b>от {props.data.min_total_price}₽</b>
        </span>
      </div>
      <hr className="card-info-line" />
      <div className="hotel-card-info">
        <Rate
          style={{ color: "#BC9CFF" }}
          allowHalf
          defaultValue={+props.data.review_score / 2}
        />
        <span>{props.data.review_score_word}</span>
      </div>
    </div>
  );
};

export default HotelCard;
