import { useState } from "react";

interface ISelect {
  options: string[];
}

const createSelectText = (values: number[], options: string[]) => {
  return `${values
    .reduce((acc, val, i) => `${acc} ${val} ${options[i]}, `, "")
    .slice(0, 25)}...`;
};

export const Select = ({ options }: ISelect) => {
  const [select, setSelect] = useState(false);
  const [optionsValues, setOptionsValues] = useState([0, 0, 0]);
  return (
    <>
      <div className="filter-info">
        <span className="filter-info-text">
          {createSelectText(optionsValues, options)}
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
                  const arr = optionsValues.map((option, i) => {
                    if (i === index && option > 0) return option - 1;
                    return option;
                  });
                  setOptionsValues(arr);
                }}
              >
                -
              </div>
              <div className="comf-count">{optionsValues[index]}</div>
              <div
                className="comf-btn more-btn"
                onClick={() => {
                  const arr = optionsValues.map((option, i) => {
                    if (i === index && option < 10) return option + 1;
                    return option;
                  });
                  setOptionsValues(arr);
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
