import { Checkbox } from "antd";
import { ICategory, IFilters } from "..";
import "./../style.css";

interface IFilter {
  filter: IFilters[];
  categoriesIds: string[];
  getCategoriesIds: (categories: string[]) => Promise<void>;
}

export const CategoryRules = ({
  filter,
  categoriesIds,
  getCategoriesIds,
}: IFilter) => {
  const { categories = [], title = "" } = filter[0] || "";
  return (
    <div className="category-rule">
      <span className="filter-title ">{title}</span>
      {categories.map(({ name, id }: ICategory) => (
        <div className="rule-checkbox">
          <input
            type="checkbox"
            className="custom-checkbox"
            id={id}
            onChange={(e) => {
              const val = e.target.id;
              if (e.target.checked) getCategoriesIds([...categoriesIds, val]);
              if (!e.target.checked) {
                const arr = [...categoriesIds].filter((elem) => elem !== val);
                getCategoriesIds(arr);
              }
            }}
          />
          <label htmlFor={id} className="checkbox-text">
            {name}
          </label>
        </div>
      ))}
    </div>
  );
};
