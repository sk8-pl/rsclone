import { DatePicker } from "antd";

export const DateLeave = () => (
  <>
    <span className="filter-title">дата выезда</span>
    <DatePicker
      size="large"
      style={{ width: "266px" }}
      placeholder="Выбрать дату"
    />
  </>
);
