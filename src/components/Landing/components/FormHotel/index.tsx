import "./style.css";

const FormHotel = () => (
  <form action="">
    <p className="find-hotel__title">Найдём номера под ваши пожелания</p>
    <div className="find-hotel__place">
      <label htmlFor="place-country" className="label-text">
        Страна
      </label>
      <input type="text" name="place-country" id="place-country" />
      <label htmlFor="place-town" className="label-text">
        Город
      </label>
      <input type="text" name="place-town" id="place-town" />
    </div>
    <div className="find-hotel__dates flex">
      <div className="find-hotel__dates-arrival">
        <label htmlFor="date-arrival" className="label-text">
          Прибытие
        </label>
        <input type="date" name="date-arrival" id="date-arrival" />
      </div>
      <div className="find-hotel__dates-departure">
        <label htmlFor="date-departure" className="label-text">
          Выезд
        </label>
        <input type="date" name="date-departure" id="date-departure" />
      </div>
    </div>
    <div className="find-hotel__guests">
      <label htmlFor="guest" className="label-text">
        Гости
      </label>
      <select name="guest" id="guest">
        <option value="">Взрослые</option>
        <option value="">Дети</option>
        <option value="">Младенцы</option>
      </select>
    </div>
    <button className="find-hotel__button">подобрать номер</button>
  </form>
);

export default FormHotel;
