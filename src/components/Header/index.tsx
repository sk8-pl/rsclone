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
            className="avatar-default-icon"
          />
        </Link>

        <Link className="header-btn sign-in" to="/sign-in">
          войти
        </Link>
        <Link className="header-btn sign-up" to="/registration">
          зарегистрироваться
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
