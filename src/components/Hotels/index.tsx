import Checkbox from "./components/Checkbox";
import HotelCard from "./components/HotelCard";
import RangeSlider from "./components/RangeSlider";
import "./style.css";

const Hotels = () => (
  <div className="hotels">
    <div className="container">
      <div className="hotels-filters">
        <div className="filter-block">
          <span className="filter-title">дата заезда</span>
          <div className="filter-info">
            <span className="filter-info-text">19 августа</span>
            <button className="change-filter-btn change-filter-date"></button>
          </div>
        </div>
        <div className="filter-block">
          <span className="filter-title">дата выезда</span>
          <div className="filter-info">
            <span className="filter-info-text">23 августа</span>
            <button className="change-filter-btn change-filter-date"></button>
          </div>
        </div>
        <div className="filter-block">
          <span className="filter-title filter-title-select">гости</span>
          <div className="filter-info">
            <span className="filter-info-text">3 гостя, 1 младенец</span>
            <button className="change-filter-btn change-filter-person"></button>
          </div>
        </div>
        <div className="filter-block">
          <span className="filter-title">диапазон цены</span>
          <RangeSlider min={0} max={10000} values={[5000, 7000]} />
          <span className="filter-details">
            Стоимость за сутки пребывания в номере
          </span>
        </div>
        <div className="filter-block">
          <span className="filter-title ">правила дома</span>
          <Checkbox text="Можно курить" />
          <Checkbox text="Можно с питомцами" />
          <Checkbox text="Можно пригласить гостей (до 10 человек)" />
        </div>
        <div className="filter-block">
          <span className="filter-title filter-title-select">
            удобства номера
          </span>
          <div className="filter-info">
            <span className="filter-info-text">2 спальни, 2 кровати...</span>
            <button className="change-filter-btn change-filter-person"></button>
          </div>
          <div className="comfortables-select">
            <div className="comfortables-option">
              <span className="comfortable-name">спальни</span>
              <div className="comf-counter">
                <div className="comf-btn more-btn">+</div>
                <div className="comf-count">2</div>
                <div className="comf-btn less-btn">-</div>
              </div>
            </div>
            <div className="comfortables-option">
              <span className="comfortable-name">кровати</span>
              <div className="comf-counter">
                <div className="comf-btn more-btn">+</div>
                <div className="comf-count">0</div>
                <div className="comf-btn less-btn">-</div>
              </div>
            </div>
            <div className="comfortables-option">
              <span className="comfortable-name">ванные комнаты</span>
              <div className="comf-counter">
                <div className="comf-btn more-btn">+</div>
                <div className="comf-count">1</div>
                <div className="comf-btn less-btn">-</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hotels-cards">
        <div className="hotels-cards-title">
          Номера, которые мы для вас подобрали
        </div>
        <div className="hotels-cards-container">
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </div>
      </div>
    </div>
  </div>
);

export default Hotels;
