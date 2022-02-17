import "./style.css";
import { FormHotel } from "./components/FormHotel";
import PopularTownCard from "./components/PopularTownCard";
import PopularHotelCard from "./components/PopularHotelCard";
import { useEffect } from "react";
import { AppDispatch, AppState } from "../../store";
import { connect } from "react-redux";
import { getCitiesData } from "../../store/cities/actions";

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

  return (
    <div className="container">
      <div className="background"></div>
      <div className="find-hotel">
        <FormHotel />
      </div>
      <div className="popular-city">
        <div className="popular-city__upper flex">
          <div className="popular-city__card upper-block">
            <PopularTownCard />
          </div>
          <div className="popular-city__card upper-block">
            <PopularTownCard />
          </div>
        </div>
        <div className="popular-city__lower flex">
          <div className="popular-city__card lower-block">
            <PopularTownCard />
          </div>
          <div className="popular-city__card lower-block">
            <PopularTownCard />
          </div>
          <div className="popular-city__card lower-block">
            <PopularTownCard />
          </div>
        </div>
      </div>
      <div className="popular-hotels">
        <h2 className="popular-hotels__title">
          Отели, которые нравятся гостям
        </h2>
        <div className="popular-hotels-cards flex">
          <PopularHotelCard />
          <PopularHotelCard />
          <PopularHotelCard />
          <PopularHotelCard />
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
