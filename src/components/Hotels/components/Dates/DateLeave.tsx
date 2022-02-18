import { DatePicker } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import { AppDispatch, AppState, getCheckOutDate } from "../../../../store";
import { disabledDate } from "./helpers/disableDate";

interface StateProps {
  checkOutDate: string;
}
interface DispatchProps {
  getCheckOutDate: (checkOutDate: string) => Promise<void>;
}

type DateLeaveProps = StateProps & DispatchProps;

export const DateLeaveComponent: React.FC<DateLeaveProps> = (props) => (
  <>
    <span className="filter-title">дата выезда</span>
    <DatePicker
      defaultValue={moment(
        new Date(props.checkOutDate || new Date()),
        "YYYY-MM-DD"
      )}
      format="YYYY-MM-DD"
      size="large"
      className="date-block"
      placeholder="Выбрать дату"
      disabledDate={disabledDate}
      onChange={(date, dateString) => {
        props.getCheckOutDate(dateString);
      }}
    />
  </>
);

const mapStateToProps = (state: AppState): StateProps => ({
  checkOutDate: state.filtersData.checkOutDate,
});
const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  getCheckOutDate: (checkOutDate) => dispatch(getCheckOutDate(checkOutDate)),
});

export const DateLeave = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateLeaveComponent);
