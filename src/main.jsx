import ReactDOM from "react-dom/client";
import Error404 from "./error/Error404.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import App from "./components/App.jsx";
import Seccion_2 from "./components/Seccion_2.jsx";
import Cuadricula from "./components/cuadricula/Cuadricula.jsx";
import Monedas from "./components/cuadricula/Monedas.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>  
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path= "/criptos" element={<App />}>
        <Route index element={<Cuadricula />} />
        <Route path=":id" element={<Monedas />} />
        <Route path="Seccion-2" element={<Seccion_2 />} />
      </Route>
        <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);
