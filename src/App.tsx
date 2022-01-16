import "./App.css";
import { Route, Routes } from "react-router";
import { routes } from "./components/helpers/routes";

const App = () => (
  <>
    <Routes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element}></Route>
      ))}
    </Routes>
  </>
);
export default App;
