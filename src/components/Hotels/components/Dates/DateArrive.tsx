import { DatePicker } from "antd";

export const DateArrive = () => (
  <>
    <span className="filter-title">дата заезда</span>
    <DatePicker
      size="large"
      style={{ width: "266px" }}
      placeholder="Выбрать дату"
    />
  </>
);
