/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-shadow */
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import {
  AppDispatch,
  AppState,
  getCategories,
  getCity,
  getHotels,
  getIdByLocation,
} from "../../store";
import HotelCard from "./components/HotelCard";
import { filterComponents } from "./constants/filterParams";
import "./style.css";
import { Button, Input, Pagination } from "antd";

interface StateProps {
  hotels: any[];
  locationId: string;
  checkInDate: string;
  checkOutDate: string;
  adultsNum: number;
  childNum: number;
  city: string;
  rooms: number;
  categories: any;
  totalPages: number;
  categoriesIds: string[];
  price: number[];
}
interface DispatchProps {
  getHotels: (request: any) => Promise<void>;
  getCity: (city: string) => Promise<void>;
  getCategories: (request: any) => Promise<void>;
  getIdByLocation: (city: string) => Promise<void>;
}
interface HotelsComponentParams {}
type HotelsComponentProps = StateProps & DispatchProps & HotelsComponentParams;

const HotelsComponent: React.FC<HotelsComponentProps> = (props) => {
  const {
    hotels,
    locationId,
    checkInDate,
    checkOutDate,
    adultsNum,
    childNum,
    city,
    rooms,
    categories,
    totalPages,
    categoriesIds,
    price,
    getHotels,
    getCity,
    getCategories,
    getIdByLocation,
  } = props;

  const [page, setPage] = useState(0);
  const [hotelsParams, setHotelsParams] = useState({
    locationId,
    checkInDate,
    checkOutDate,
    adultsNum,
    childNum,
    categoriesIds,
    rooms,
    price,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    getHotels({
      locationId: hotelsParams.locationId,
      checkInDate: hotelsParams.checkInDate,
      checkOutDate: hotelsParams.checkOutDate,
      adultsNum: hotelsParams.adultsNum,
      childNum: hotelsParams.childNum,
      page,
      totalPages,
      categoriesIds: hotelsParams.categoriesIds,
      rooms: hotelsParams.rooms,
    });
    getCategories({
      locationId: hotelsParams.locationId,
      checkInDate: hotelsParams.checkInDate,
      checkOutDate: hotelsParams.checkOutDate,
      adultsNum: hotelsParams.adultsNum,
      childNum: hotelsParams.childNum,
      rooms: hotelsParams.rooms,
    });
  }, [page, hotelsParams]);
  return (
    <div className="hotels">
      <div className="container">
        <div className="hotels-filters">
          <div className="filter-block">
            <span className="filter-title filter-title-select">город</span>
            <Input
              placeholder="Москва"
              defaultValue={locationId}
              name="place-town"
              className="filters-hotel-input"
              onChange={(e) => {
                getIdByLocation((e.target as HTMLInputElement).value);
              }}
            />
          </div>

          {filterComponents.map((component, index) => (
            <div className="filter-block" key={index}>
              {component}
            </div>
          ))}
          <Button
            type="primary"
            onClick={() => {
              setHotelsParams({
                locationId,
                checkInDate,
                checkOutDate,
                adultsNum,
                childNum,
                categoriesIds,
                rooms,
                price,
              });
            }}
          >
            Применить
          </Button>
        </div>
        <div className="hotels-cards">
          <div className="hotels-cards-title">
            Номера, которые мы для вас подобрали
          </div>
          <div className="hotels-cards-container">
            {hotels
              .filter(
                ({ min_total_price }) =>
                  min_total_price >= hotelsParams.price[0] &&
                  min_total_price <= hotelsParams.price[1]
              )
              .map((val, index) => {
                return <HotelCard data={val} key={index} />;
              })}
          </div>
          <Pagination
            current={page + 1}
            total={totalPages * 10}
            onChange={() => {
              setPage(page + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: AppState): StateProps => ({
  hotels: state.hotelsData.hotels,
  locationId: state.hotelsData.locationId,
  checkInDate: state.filtersData.checkInDate,
  checkOutDate: state.filtersData.checkOutDate,
  adultsNum: state.filtersData.adultsNum,
  childNum: state.filtersData.childNum,
  city: state.filtersData.city,
  rooms: state.filtersData.rooms,
  categories: state.filtersData.categories,
  totalPages: state.hotelsData.totalPages,
  categoriesIds: state.filtersData.categoriesIds,
  price: state.filtersData.price,
});
const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  getHotels: (request) => dispatch(getHotels(request)),
  getCity: (city) => dispatch(getCity(city)),
  getCategories: (request) => dispatch(getCategories(request)),
  getIdByLocation: (city) => dispatch(getIdByLocation(city)),
});

export const Hotels = connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelsComponent);
