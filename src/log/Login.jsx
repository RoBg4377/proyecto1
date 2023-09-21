import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navegar = useNavigate()

  const [usuario, setUsuario] = useState({
    email: "",
    password: ""
  });


  const submit = (e) => {
    e.preventDefault()
    axios
    .post("https://reqres.in/api/login", usuario)
    .then((dato) =>{
      localStorage.setItem("loginToken", dato.data.token);
      navegar("/")
    })
    .catch((e) => console.error(e))
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
            onChange={(e) =>
              setUsuario({ ...usuario, email: e.target.value })
            }
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
              setUsuario({...usuario, password: e.target.value})
            }
          />
        </div>
        <div className="submit">
          <input
            type="submit"
            name="submit"
            value="INGRESAR"
            className=" loginBoton"
          />
        </div>
      </form>
    </div>
  );
};
export default Login;
