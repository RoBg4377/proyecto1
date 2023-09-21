import ReactDOM from "react-dom/client";
import Error404 from "./error/Error404.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import App from "./components/App.jsx";
import Cuadricula from "./components/cuadricula/Cuadricula.jsx";
import Monedas from "./components/cuadricula/Monedas.jsx";
import Autor from "./components/Autor.jsx";
import "./main.css";
import { AutorContextProvider } from "./components/context/AutorProvider.jsx";
import Login from "./log/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AutorContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/criptos" element={<App />}>
          <Route index element={<Cuadricula />} />
          <Route path=":id" element={<Monedas />} />
          <Route path="autor" element={<Autor />} />
        </Route>
        <Route path="login" element={<Login />}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </AutorContextProvider>
);
