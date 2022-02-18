/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect } from "react-redux";
import { AppDispatch, AppState, getCategories } from "../../../../store";
import Checkbox from "../Checkbox";
import { checkboxLabels } from "../Checkbox/constants/checkboxParams";

interface ICategories {
  count: number;
  id: string;
  name: string;
  selected: number;
}

interface StateProps {
  locationId: string;
  checkInDate: string;
  checkOutDate: string;
  adultsNum: number;
  childNum: number;
  rooms: number;
  categories: any;
}
interface DispatchProps {
  getCategories: (request: any) => Promise<void>;
}

type RulesComponentProps = StateProps & DispatchProps;

const RulesComponent: React.FC<RulesComponentProps> = (props) => {
  const {
    locationId,
    checkInDate,
    checkOutDate,
    adultsNum,
    childNum,
    rooms,
    categories,
    getCategories,
  } = props;
  useEffect(() => {
    getCategories({
      locationId,
      checkInDate,
      checkOutDate,
      adultsNum,
      childNum,
      rooms,
    });
  }, []);
  console.log(categories);
  return (
    <>
      <span className="filter-title ">правила дома</span>
      {categories.map(({ name }: ICategories) => (
        <Checkbox text={name} />
      ))}
    </>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  locationId: state.hotelsData.locationId,
  checkInDate: state.filtersData.checkInDate,
  checkOutDate: state.filtersData.checkOutDate,
  adultsNum: state.filtersData.adultsNum,
  childNum: state.filtersData.childNum,
  rooms: state.filtersData.rooms,
  categories: state.filtersData.categories,
});
const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  getCategories: (request) => dispatch(getCategories(request)),
});

export const Rules = connect(
  mapStateToProps,
  mapDispatchToProps
)(RulesComponent);
