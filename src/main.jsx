import ReactDOM from "react-dom/client";
import Error404 from "./error/Error404.jsx";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Seccion_1 from "./components/Seccion_1.jsx";
import Seccion_2 from "./components/Seccion_2.jsx";
import Cuadricula from "./components/Cuadricula.jsx";
import App from "./App.jsx";
import Home from "./Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>  
    <Routes>
      <Route path="/" element={<Home />}>

      </Route>
      <Route path= "/criptos" element={<App />}>
        <Route index element={<Cuadricula />} />
        <Route path="Seccion-1" element={<Seccion_1 />} />
        <Route path="Seccion-2" element={<Seccion_2 />} />
      </Route>
        <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);
