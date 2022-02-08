import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="header-logo">
        <div className="logo-img"></div>
        <h1 className="logo-text">SkyHotel</h1>
      </div>
      <div className="header-btns">
        <Link to="/profile">
          <Avatar
            size={42}
            icon={<UserOutlined />}
            style={{ marginRight: 20 }}
          />
        </Link>

        <button className="header-btn sign-in">войти</button>
        <button className="header-btn sign-up">зарегистрироваться</button>
      </div>
    </div>
  </div>
);

export default Header;
