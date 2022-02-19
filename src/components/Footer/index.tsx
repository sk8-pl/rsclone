import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container flex">
        <a className="rssschool" href="https://rs.school/"></a>
        <div className="github">
          <a className="link-git" href="https://github.com/sk8-pl">
            Sk8-pl
          </a>
          <a className="link-git" href="https://github.com/annaignatova">
            AnnaIgnatova
          </a>
          <a className="link-git" href="https://github.com/lost-fox">
            Lost-fox
          </a>
        </div>
        <p className="year">2022</p>
      </div>
    </div>
  );
};

export default Footer;
