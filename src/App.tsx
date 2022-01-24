import "./App.css";
import { Route, Routes } from "react-router";
import { routes } from "./components/helpers/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Header />
    <Routes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element}></Route>
      ))}
    </Routes>
    <Footer />
  </>
);
export default App;
