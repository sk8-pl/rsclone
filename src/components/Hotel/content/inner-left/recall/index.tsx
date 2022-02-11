import Commentarys from "./comment";
import "./style.css";

const Recall = () => {
  return (
    <div className="recall">
      <div className="recall-tittle">
        <h3>Отзывы посетителей номера</h3>
      </div>
      <Commentarys />
    </div>
  );
};

export default Recall;
