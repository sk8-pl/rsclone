import Comment from "./comment";
import "./style.css";

const Recall = () => {
  return (
    <div className="recall">
      <div className="recall-tittle">
        <h3>Отзывы посетителей номера</h3>
        <div className="recall-amount">2 отзыва</div>
      </div>
      <Comment />
      <Comment />
    </div>
  );
};

export default Recall;
