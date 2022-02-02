import "./style.css";

const HotelCard = () => (
  <div className="hotel-card">
    <div className="hotel-card-img"></div>
    <div className="hotel-card-info">
      <span className="info-num">№ 888</span>
      <span className="info-vip">люкс</span>
      <span className="info-cost">
        <b>9 990₽</b> в сутки
      </span>
    </div>
    <hr className="card-info-line" />
    <div className="hotel-card-info">
      <div className="info-raiting">
        {[...Array(5)].map((elem, i, arr) => (
          <span
            className={`rating-star ${
              i === arr.length - 1 ? "non-filled" : ""
            }`}
          ></span>
        ))}
      </div>
      <div className="info-reviews">
        <b>145</b> Отзывов
      </div>
    </div>
  </div>
);

export default HotelCard;
