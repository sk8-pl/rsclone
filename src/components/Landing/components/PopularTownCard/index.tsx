import "./style.css";

const PopularTownCard = () => (
  <div>
    <div className="city-card__title flex">
      <h3 className="city-card__title-h3">Город</h3>
      <img
        className="city-card__title-img"
        src="http://abali.ru/wp-content/uploads/2011/08/Flag_of_Norway.png"
        alt="flag"
      />
    </div>
    <p className="city-card-text">
      <b>0000</b> вариантов размещения
    </p>
  </div>
);

export default PopularTownCard;
