import { DatePicker } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import { AppDispatch, AppState, getCheckInDate } from "../../../../store";
import { disabledDate } from "./helpers/disableDate";

interface StateProps {
  checkInDate: string;
}
interface DispatchProps {
  getCheckInDate: (checkInDate: string) => Promise<void>;
}

type DateArriveProps = StateProps & DispatchProps;

export const DateArriveComponent: React.FC<DateArriveProps> = (props) => (
  <>
    <span className="filter-title">дата заезда</span>
    <DatePicker
      defaultValue={moment(
        new Date(props.checkInDate || new Date()),
        "YYYY-MM-DD"
      )}
      format="YYYY-MM-DD"
      size="large"
      style={{ width: "266px", marginBottom: 20 }}
      placeholder="Выбрать дату"
      disabledDate={disabledDate}
      onChange={(date, dateString) => {
        props.getCheckInDate(dateString);
      }}
    />
  </>
);

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
