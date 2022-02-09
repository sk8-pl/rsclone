import Hotel from "../Hotel";
import { Hotels } from "../Hotels";
import Landing from "../Landing";
import Profile from "../Profile";
import Registration from "../Registration";
import SignIn from "../SignIn";

export const routes = [
  { path: "/", element: <Landing /> },
  { path: "/hotels", element: <Hotels /> },
  { path: "/hotel", element: <Hotel /> },
  { path: "/profile", element: <Profile /> },
  { path: "/registration", element: <Registration /> },
  { path: "/sign-in", element: <SignIn /> },
];
