import { roomSelect } from "../../constants/filterParams";
import { Select } from "../Select";

export const Comfortables = () => (
  <>
    <span className="filter-title filter-title-select">удобства номера</span>
    <Select options={roomSelect} />
  </>
);
