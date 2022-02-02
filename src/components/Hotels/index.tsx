import { useState } from "react";
import HotelCard from "./components/HotelCard";
import { filterComponents } from "./constants/filterParams";
import "./style.css";

const Hotels = () => {
  const [page, setPage] = useState(0);
  return (
    <div className="hotels">
      <div className="container">
        <div className="hotels-filters">
          {filterComponents.map((component) => (
            <div className="filter-block">{component}</div>
          ))}
        </div>
        <div className="hotels-cards">
          <div className="hotels-cards-title">
            Номера, которые мы для вас подобрали
          </div>
          <div className="hotels-cards-container">
            {[...Array(15)].map(() => (
              <HotelCard />
            ))}
          </div>
          <div className="hotels-pagination">
            {[1, 2, 3, 4, 5].map((value, index) => (
              <div
                className={`page ${index === page ? "active-page" : ""}`}
                onClick={() => setPage(index)}
              >
                {value}
              </div>
            ))}
            <div
              className="next-page"
              onClick={() => {
                const newPage = page === 4 ? 0 : page + 1;
                setPage(newPage);
              }}
            >
              →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
