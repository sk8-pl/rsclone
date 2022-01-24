import "./style.css";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="header-logo">
        <div className="logo-img"></div>
        <h1 className="logo-text">SkyHotel</h1>
      </div>
      <nav>
        <ul className="social-menu">
          <li>
            <a
              href="https://www.instagram.com/"
              className="social-link instagram-link"
            ></a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="social-link fb-link"
            ></a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              className="social-link twitter-link"
            ></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Footer;
