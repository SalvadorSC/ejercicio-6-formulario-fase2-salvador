import PropTypes from "prop-types";
import { useFormulario } from "../hooks/useFormulario";
import { useState } from "react";

export const Paso3 = (props) => {
  const {
    datosAcceso,
    avanzaPaso,
    retrocedePaso,
    datosRegistro: { username: definedUsername, password: definedPassword },
  } = props;
  const [errorClass, setErrorClass] = useState("errorNotShow");
  const {
    datos: { username, password, recordarPassword },
    setDato,
  } = useFormulario(datosAcceso);
  const enviaPaso = (e) => {
    e.preventDefault();
    if (definedUsername === username && definedPassword === password) {
      avanzaPaso();
    } else {
      setErrorClass("errorShow");
    }
  };
  return (
    <>
      <h2>Paso 3: Login</h2>
      <form noValidate onSubmit={enviaPaso}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            value={username}
            onChange={setDato}
            className="form-control"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={setDato}
            id="password"
            className="form-control"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="recordarPassword"
            className="form-check-input"
            checked={recordarPassword}
            onChange={setDato}
          />
          <label htmlFor="recordarPassword" className="form-check-label">
            Recordar contraseña
          </label>
        </div>
        <p className={errorClass}>Contraseña incorrecta!</p>
        <button className="btn btn-info" onClick={retrocedePaso}>
          Anterior
        </button>
        <button className="btn btn-info" type="submit">
          Acceder
        </button>
      </form>
    </>
  );
};

Paso3.propTypes = {
  avanzaPaso: PropTypes.func.isRequired,
  retrocedePaso: PropTypes.func.isRequired,
  datosAcceso: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    recordarPassword: PropTypes.bool.isRequired,
  }).isRequired,
};
