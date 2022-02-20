import "./style.css";
import { FormHotel } from "./components/FormHotel";
import PopularTownCard from "./components/PopularTownCard";
import PopularHotelCard from "./components/PopularHotelCard";
import AnimationBackground from "./components/animation-background";
import { useEffect } from "react";
import { AppDispatch, AppState } from "../../store";
import { connect, useSelector } from "react-redux";
import { getCitiesData } from "../../store/cities/actions";
import { GetHotelsByLocationDataResponse } from "../../api/getHotelsByLocationData.api";
import { Spin } from "antd";

interface StateProps {
  city: any;
}
interface DispatchProps {
  getCitiesData: () => Promise<void>;
}

type LandingProps = StateProps & DispatchProps;

const Landing: React.FC<LandingProps> = (props) => {
  const { city, getCitiesData: getData } = props;

  useEffect(() => {
    getData();
  }, [getData]);

  const hotelByLocation = useSelector<
    AppState,
    GetHotelsByLocationDataResponse | null
  >((state) => state.hotelsByLocationData.hotelsByLocation);

  const getRundomNum = (finish: number) => {
    return Math.floor(Math.random() * (0 - finish) + finish);
  };

  if (hotelByLocation === null)
    return (
      <div className="expectation background">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="container">
      <div className="background">
        <AnimationBackground />
      </div>
      <div className="find-hotel">
        <FormHotel />
      </div>
      <div className="popular-city flex">
        <PopularTownCard city={props.city} id={0} />
        <PopularTownCard city={props.city} id={1} />
        <PopularTownCard city={props.city} id={2} />
        <PopularTownCard city={props.city} id={3} />
        <PopularTownCard city={props.city} id={4} />
      </div>
      <div className="popular-hotels">
        <h2 className="popular-hotels__title">
          {hotelByLocation.result[0].country_trans} - прекрасная страна!
        </h2>
        <div className="popular-hotels-cards flex">
          <PopularHotelCard
            hotel={
              hotelByLocation.result[
                getRundomNum(hotelByLocation.result.length)
              ]
            }
          />
          <PopularHotelCard
            hotel={
              hotelByLocation.result[
                getRundomNum(hotelByLocation.result.length)
              ]
            }
          />
          <PopularHotelCard
            hotel={
              hotelByLocation.result[
                getRundomNum(hotelByLocation.result.length)
              ]
            }
          />
          <PopularHotelCard
            hotel={
              hotelByLocation.result[
                getRundomNum(hotelByLocation.result.length)
              ]
            }
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  city: state.citiesData.city,
});
const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  getCitiesData: () => dispatch(getCitiesData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
