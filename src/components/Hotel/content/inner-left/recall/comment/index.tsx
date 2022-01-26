import "./style.css";

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment-author">
        <div className="icon-author"></div>
        <div className="name-author">
          <h4 className="name-author_comment">Имя Фамилия</h4>
          <div className="long-ago">0 дней назад</div>
        </div>
      </div>
      <div className="comment-text">
        <div className="like-amount">&#9829; 0 </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eos,
          consectetur quo quas pariatur cupiditate facere voluptate maiores quia
          commodi fugiat accusantium praesentium blanditiis qui iure numquam
          delectus culpa? Iure!
        </p>
      </div>
    </div>
  );
};

export default Comment;
