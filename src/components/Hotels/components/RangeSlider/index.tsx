import React, { useContext } from "react";
import { Range } from "rc-slider";
import "./style.css";
import { SettingsContext } from "../../../../context/StoreContext";

interface IValues {
  min: number;
  max: number;
  values: number[];
}

const RangeSlider = (props: IValues) => {
  const { setPrice } = useContext(SettingsContext);
  const handleChange = (sliderValues: number[]) => {
    setPrice(sliderValues[0], sliderValues[1]);
  };
  return (
    <div>
      <Range
        min={props.min}
        max={props.max}
        onChange={handleChange}
        value={[props.values[0], props.values[1]]}
      />
      <div className="count-ranges">
        <div>{props.values[0]} ₽</div>
        <div>{props.values[1]} ₽</div>
      </div>
    </div>
  );
};

export default RangeSlider;
