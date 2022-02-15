import { DatePicker } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import { AppDispatch, AppState, getCheckInDate } from "../../../../store";
import { dateFormat } from "./constants/dateConstants";
import { disabledDate } from "./helpers/disableDate";
import "./style.css";

interface StateProps {
  checkInDate: string;
}
interface DispatchProps {
  getCheckInDate: (checkInDate: string) => Promise<void>;
}

type DateArriveProps = StateProps & DispatchProps;

export const DateArriveComponent: React.FC<DateArriveProps> = (props) => {
  const { checkInDate } = props;
  return (
    <>
      <span className="filter-title">дата заезда</span>
      <DatePicker
        defaultValue={moment(new Date(checkInDate || new Date()), dateFormat)}
        format={dateFormat}
        size="large"
        className="date-block"
        placeholder="Выбрать дату"
        disabledDate={disabledDate}
        onChange={(date, dateString) => {
          props.getCheckInDate(dateString);
        }}
      />
    </>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  checkInDate: state.hotelsData.checkInDate,
});
const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  getCheckInDate: (checkInDate) => dispatch(getCheckInDate(checkInDate)),
});

export const DateArrive = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateArriveComponent);
