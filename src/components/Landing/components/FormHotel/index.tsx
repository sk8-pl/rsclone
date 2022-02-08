import { DatePicker, Input, Form } from "antd";
import { Link } from "react-router-dom";
import { Select } from "../../../Hotels/components/Select";
import { guestSelect } from "../../../Hotels/constants/filterParams";
import "./style.css";

const FormHotel = () => (
  <Form>
    <p className="find-hotel__title">Найдём номера под ваши пожелания</p>
    <div className="find-hotel__place">
      <label htmlFor="place-country" className="label-text">
        Страна
      </label>
      <Form.Item
        rules={[{ required: true, message: "Пожалуйста, введите страну" }]}
      >
        <Input placeholder="Россия" style={{ height: 40 }} />
      </Form.Item>

      <label htmlFor="place-town" className="label-text">
        Город
      </label>
      <Form.Item
        rules={[{ required: true, message: "Пожалуйста, введите город" }]}
      >
        <Input placeholder="Москва" name="place-town" style={{ height: 40 }} />
      </Form.Item>
    </div>
    <div className="find-hotel__dates flex">
      <div className="find-hotel__dates-arrival">
        <label htmlFor="date-arrival" className="label-text">
          Прибытие
        </label>
        <DatePicker
          size="large"
          style={{ width: "266px" }}
          placeholder="Выбрать дату"
        />
      </div>
      <div className="find-hotel__dates-departure">
        <label htmlFor="date-departure" className="label-text">
          Выезд
        </label>
        <DatePicker
          size="large"
          style={{ width: "266px" }}
          placeholder="Выбрать дату"
        />
      </div>
    </div>
    <div className="find-hotel__guests">
      <label htmlFor="guest" className="label-text">
        Гости
      </label>
      <Select options={guestSelect} />
    </div>
    <Link className="find-hotel__button" to="/hotels">
      подобрать номер
    </Link>
  </Form>
);

export default FormHotel;
