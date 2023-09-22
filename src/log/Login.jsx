import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navegar = useNavigate();

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const [cargar, setCargar] = useState(false);
  const [error, setError] = useState();

  const submit = (e) => {
    setCargar(true);
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", usuario)
      .then((dato) => {
        localStorage.setItem("loginToken", dato.data.token);
        navegar("/");
        setCargar(false);
      })
      .catch((e) => {
        setCargar(false);
        console.table(e.response.data.error);
        setError(e.response.data.error);
      });
  };

  return (
    <div className="loginContainer">
      <h2>Inicio de sesión</h2>
      <form action="submit" className="loginForm" onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo:</label>
          <input
            required
            type="email"
            name="email"
            className="loginInput"
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña:</label>
          <input
            required
            type="password"
            name="password"
            className="loginInput"
            onChange={(e) =>
              setUsuario({ ...usuario, password: e.target.value })
            }
          />
        </div>
        <div className="submit">
          <input
            type="submit"
            name="submit"
            value={cargar ? "CARGANDO..." : "INGRESAR"}
            className=" loginBoton"
          />
        </div>
      </form>
      <div className="errorContainer">

      {error && <span className="error">{error}</span>}
      </div>
    </div>
  );
};
export default Login;
