import { Navigate, Outlet} from "react-router-dom";
import Menu from "../menu/Menu";
import "./App.css"

const App = () => {

  if(!localStorage.getItem("loginToken")) return <Navigate to="/" />


  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};
export default App;