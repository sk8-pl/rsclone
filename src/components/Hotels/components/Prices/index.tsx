import { useContext } from "react";
import { SettingsContext } from "../../../../context/StoreContext";
import RangeSlider from "../RangeSlider";

export const Price = () => {
  const { price } = useContext(SettingsContext);
  return (
    <>
      <span className="filter-title">диапазон цены</span>
      <RangeSlider min={0} max={10000} values={price} />
      <span className="filter-details">
        Стоимость за сутки пребывания в номере
      </span>
    </>
  );
};
