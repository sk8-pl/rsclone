import { Rate } from "antd";
import { useState } from "react";
import "./style.css";

const HotelCard = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="hotel-card">
      <div className="hotel-card-img">
        <div
          className={`favorite-icon ${favorite ? "favorite" : ""}`}
          onClick={() => setFavorite(!favorite)}
        ></div>
      </div>
      <div className="hotel-card-info">
        <span className="info-num">№ 888</span>
        <span className="info-vip">люкс</span>
        <span className="info-cost">
          <b>9 990₽</b> в сутки
        </span>
      </div>
      <hr className="card-info-line" />
      <div className="hotel-card-info">
        <Rate style={{ color: "#BC9CFF" }} />
        <div className="info-reviews">
          <b>145</b> Отзывов
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
