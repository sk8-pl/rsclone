import "./style.css";

const Profile = () => (
  <div className="profile">
    <div className="container">
      <div className="profile-info">
        <div className="avatar-img"></div>
        <div className="user-info">
          <div className="greeting">Здравствуйте, User! Рады видеть вас!</div>
          <div className="wrapper-info">
            <span className="info-title">Редактировать информацию о себе:</span>
            <div className="info-block">
              <span className="info-name">Имя</span>
              <input type="text" className="info-input" />
            </div>
            <div className="info-block">
              <span className="info-name">Фамилия</span>
              <input type="text" className="info-input" />
            </div>
            <div className="info-block">
              <span className="info-name">E-mail</span>
              <input type="text" className="info-input" />
            </div>
            <div className="info-block">
              <span className="info-name">Телефон</span>
              <input type="text" className="info-input" />
            </div>
          </div>
          <div className="booking-info">
            <span className="info-title">Ваши бронирования:</span>
            <div className="booking-item">
              <div className="booking-img"></div>
              <div className="booking-hotel-info">
                <span className="hotel-info hotel-info-name">
                  Hotel Park Inn
                </span>
                <span className="hotel-info">20 дек. 2018 - 13 янв. 2019</span>
              </div>
              <span className="hotel-info-name">
                <b>14 000</b>
              </span>
            </div>
            <div className="booking-item">
              <div className="booking-img"></div>
              <div className="booking-hotel-info">
                <span className="hotel-info hotel-info-name">
                  Hotel Park Inn
                </span>
                <span className="hotel-info">20 дек. 2018 - 13 янв. 2019</span>
              </div>
              <span className="hotel-info-name">
                <b>14 000</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
