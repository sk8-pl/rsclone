import "./style.css";
import { Avatar, Button, Card, Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { BookingCard } from "./components/BookingCard";
import { changeUserInput } from "./helpers/changeUserInput";
import { userInfo, userInfoTitles } from "./constants/userInfo";
import { UploadPhoto } from "./components/UploadPhoto";
import { FavoriteHotelCard } from "./components/FavoriteHotelCard";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import { GetUserDataResponse } from "../../api/getUserData.api";

const Profile = () => {
  const user = useSelector<AppState, GetUserDataResponse | null>(
    (state) => state.usersData.user
  );
  return (
    <div className="profile">
      <div className="container">
        <div className="profile-info">
          <div className="user-avatar">
            <Avatar
              size={300}
              icon={<UserOutlined />}
              style={{ marginBottom: "20px" }}
            />
            <UploadPhoto />
          </div>
          <div className="user-info">
            <div className="greeting">
              Здравствуйте, {user?.name || "User"}! Рады видеть вас!
            </div>
            <div className="wrapper-info">
              <span className="info-title">
                Редактировать информацию о себе:
              </span>
              {userInfoTitles.map((val, index) => (
                <div className="info-block">
                  <span className="info-name">{val}</span>
                  <input
                    type="text"
                    className="info-input"
                    disabled
                    placeholder={userInfo[index]}
                  />
                  <Button type="primary" onClick={changeUserInput}>
                    Изменить
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="booking-info">
          <span className="info-title">Ваши бронирования:</span>
          <div className="booking-cards-container">
            <BookingCard />
            <BookingCard />
            <BookingCard />
          </div>
        </div>
        <div className="booking-info">
          <span className="info-title">Избранное:</span>
          <div className="favorite-hotels-cards">
            <FavoriteHotelCard />
            <FavoriteHotelCard />
            <FavoriteHotelCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
