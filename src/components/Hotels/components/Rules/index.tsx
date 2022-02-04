import Checkbox from "../Checkbox";
import { checkboxLabels } from "../Checkbox/constants/checkboxParams";

export const Rules = () => (
  <>
    <span className="filter-title ">правила дома</span>
    {checkboxLabels.map((text) => (
      <Checkbox text={text} />
    ))}
  </>
);
