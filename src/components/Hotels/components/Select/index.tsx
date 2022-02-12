import { useState } from "react";
import { connect } from "react-redux";
import {
  AppDispatch,
  AppState,
  getAdultsNum,
  getChildNum,
} from "../../../../store";

interface StateProps {
  adultsNum: string;
  childNum: string;
}
interface DispatchProps {
  getAdultsNum: (adultsNum: string) => Promise<void>;
  getChildNum: (childNum: string) => Promise<void>;
}
// interface HotelsComponentParams {}
type SelectComponentProps = StateProps & DispatchProps;

const createSelectText = (values: number[], options: string[]) =>
  `${values
    .reduce((acc, val, i) => `${acc} ${val} ${options[i]}, `, "")
    .slice(0, -1)}`;

export const SelectComponent: React.FC<SelectComponentProps> = (props) => {
  const [select, setSelect] = useState(false);
  const [adultsNum, setAdultsNum] = useState(+props.adultsNum);
  const [childNum, setChildNum] = useState(+props.childNum);
  const options = ["взрослые", "дети"];
  return (
    <>
      <div className="filter-info">
        <span className="filter-info-text">
          {createSelectText([+adultsNum, +childNum], options)}
        </span>
        <button
          className="change-filter-btn change-filter-person"
          onClick={() => setSelect(!select)}
        ></button>
      </div>
      <div className={`comfortables-select ${!select ? "hidden" : ""}`}>
        {options.map((value, index) => (
          <div className="comfortables-option">
            <span className="comfortable-name">{value}</span>
            <div className="comf-counter">
              <div
                className="comf-btn less-btn"
                onClick={() => {
                  const arr = [+adultsNum, +childNum].map((option, i) => {
                    if (i === index && option > 0) return option - 1;
                    return option;
                  });
                  setAdultsNum(arr[0]);
                  setChildNum(arr[1]);
                  props.getAdultsNum(`${arr[0]}`);
                  props.getChildNum(`${arr[1]}`);
                }}
              >
                -
              </div>
              <div className="comf-count">{[+adultsNum, +childNum][index]}</div>
              <div
                className="comf-btn more-btn"
                onClick={() => {
                  const arr = [+adultsNum, +childNum].map((option, i) => {
                    if (i === index && option < 10) return option + 1;
                    return option;
                  });
                  setAdultsNum(arr[0]);
                  setChildNum(arr[1]);
                  props.getAdultsNum(`${arr[0]}`);
                  props.getChildNum(`${arr[1]}`);
                }}
              >
                +
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  adultsNum: state.hotelsData.adultsNum,
  childNum: state.hotelsData.childNum,
});
const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  getAdultsNum: (adultsNum) => dispatch(getAdultsNum(adultsNum)),
  getChildNum: (childNum) => dispatch(getChildNum(childNum)),
});

export const Select = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectComponent);
