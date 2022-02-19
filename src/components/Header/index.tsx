import "./style.css";
import { HeaderBtn } from "./components/HeaderBtn";
import { connect } from "react-redux";
import { AppDispatch, AppState } from "../../store";
import { getUserData } from "../../store/users/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface StateProps {
  user: any;
}
interface DispatchProps {
  getUserData: () => Promise<void>;
}

type HeaderProps = StateProps & DispatchProps;

const Header: React.FC<HeaderProps> = (props) => {
  const { user, getUserData: getData } = props;
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="header">
      <div className="container">
        <Link className="header-logo" to="/">
          <div className="logo-img"></div>
          <h1 className="logo-text">SkyHotel</h1>
        </Link>
        <HeaderBtn data={props.user} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  user: state.usersData.user,
});
const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  getUserData: () => dispatch(getUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
