import "./App.css";
import { Route, Routes } from "react-router";
import { routes } from "./components/helpers/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SettingsContainer } from "./context/StoreContext";

const App = () => (
  <SettingsContainer>
    <Header />
    <Routes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element}></Route>
      ))}
    </Routes>
    <Footer />
  </SettingsContainer>
);
export default App;
