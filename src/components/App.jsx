import { Outlet } from "react-router-dom";
import Menu from "../menu/Menu";
import "./App.css"

const App = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};
export default App;