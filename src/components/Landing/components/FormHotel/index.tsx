import { DatePicker, Input, Form } from "antd";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  AppDispatch,
  AppState,
  getCheckInDate,
  getCheckOutDate,
  getIdByLocation,
} from "../../../../store";
import { DateArrive } from "../../../Hotels/components/Dates/DateArrive";
import { DateLeave } from "../../../Hotels/components/Dates/DateLeave";
import { Select } from "../../../Hotels/components/Select";
import { guestSelect } from "../../../Hotels/constants/filterParams";
import "./style.css";

interface StateProps {
  locationId: string;
}
interface DispatchProps {
  getIdByLocation: (location: any) => Promise<void>;
  getCheckInDate: (checkInDate: string) => Promise<void>;
  getCheckOutDate: (checkOutDate: string) => Promise<void>;
}
// interface HotelsComponentParams {}
type FormHotelProps = StateProps & DispatchProps;

const FormHotelComponent: React.FC<FormHotelProps> = (props) => {
  const [city, setCity] = useState("");
  return (
    <Form>
      <p className="find-hotel__title">Найдём номера под ваши пожелания</p>
      <div className="find-hotel__place">
        {/* <label htmlFor="place-country" className="label-text">
          Страна
        </label>
        <Form.Item
          rules={[{ required: true, message: "Пожалуйста, введите страну" }]}
        >
          <Input placeholder="Россия" style={{ height: 40 }} />
        </Form.Item> */}

        <label htmlFor="place-town" className="label-text">
          Город
        </label>
        <Form.Item
          rules={[{ required: true, message: "Пожалуйста, введите город" }]}
        >
          <Input
            placeholder="Москва"
            name="place-town"
            style={{ height: 40 }}
            onChange={(e) => {
              setCity((e.target as HTMLInputElement).value);
            }}
          />
        </Form.Item>
      </div>
      <div className="find-hotel__dates flex">
        <div className="find-hotel__dates-arrival">
          <DateArrive />
          {/* <DatePicker
            size="large"
            style={{ width: "266px" }}
            placeholder="Выбрать дату"
            onChange={(date, dateString) => {
              setCheckInDate(dateString);
            }}
          /> */}
        </div>
        <div className="find-hotel__dates-departure">
          {/* <label htmlFor="date-departure" className="label-text">
            Выезд
          </label> */}
          <DateLeave />
          {/* <DatePicker
            size="large"
            style={{ width: "266px" }}
            placeholder="Выбрать дату"
            onChange={(date, dateString) => {
              setCheckOutDate(dateString);
            }}
          /> */}
        </div>
      </div>
      <div className="find-hotel__guests">
        <label htmlFor="guest" className="label-text">
          Гости
        </label>
        <Select />
      </div>
      <Link
        className="find-hotel__button"
        to="/hotels"
        onClick={() => {
          props.getIdByLocation(city);
        }}
      >
        подобрать номер
      </Link>
    </Form>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  locationId: state.hotelsData.locationId,
});
const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  getIdByLocation: (location) => dispatch(getIdByLocation(location)),
  getCheckInDate: (checkInDate) => dispatch(getCheckInDate(checkInDate)),
  getCheckOutDate: (checkOutDate) => dispatch(getCheckOutDate(checkOutDate)),
});

export const FormHotel = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormHotelComponent);
