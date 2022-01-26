import "./style.css";

const PopularHotelCard = () => (
  <div className="popular-hotel-card">
    <img
      className="hotel-card__img"
      src="https://via.placeholder.com/2000x1900"
      alt="hotel"
    />
    <h4 className="hotel-card__title-hotel">Отель</h4>
    <h5 className="hotel-card__title-country">Страна</h5>
    <p className="hotel-card__price">
      От <span className="min-price-hotel">US $000</span>
    </p>
    <div className="hotel-card__rating flex">
      <div className="hotel-card__rating-grade">
        <p className="hotel-card__rating-grade-text">9,0</p>
      </div>
      <div className="hotel-card__rating-status">Превосходно</div>
      <div className="hotel-card__rating-comments">00 отзывов</div>
    </div>
  </div>
);

export default PopularHotelCard;
