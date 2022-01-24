import "./style.css";

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="header-logo">
        <div className="logo-img"></div>
        <h1 className="logo-text">SkyHotel</h1>
      </div>
      <div className="header-btns">
        <button className="header-btn sign-in">войти</button>
        <button className="header-btn sign-up">зарегистрироваться</button>
      </div>
    </div>
  </div>
);

export default Header;
