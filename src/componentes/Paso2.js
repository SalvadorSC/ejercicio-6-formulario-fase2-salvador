import PropTypes from "prop-types";
import { useFormulario } from "../hooks/useFormulario";
import { useState } from "react";

export const Paso2 = (props) => {
  const { datosRegistro, avanzaPaso, retrocedePaso, setDatosRegistro } = props;
  const [errorClass, setErrorClass] = useState("errorNotShow");
  const {
    datos: { username, password, repitePassword },
    datos,
    setDato,
  } = useFormulario(datosRegistro);
  const enviaPaso = (e) => {
    e.preventDefault();
    if (password === repitePassword) {
      setDatosRegistro({ ...datos });
      avanzaPaso();
    } else {
      setErrorClass("errorShow");
    }
  };
  return (
    <>
      <h2>Paso 2: Datos de acceso</h2>
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
        <div className="form-group">
          <label htmlFor="repitePassword">Repetir contraseña:</label>
          <input
            type="password"
            value={repitePassword}
            onChange={setDato}
            id="repitePassword"
            className="form-control"
          />
        </div>
        <p className={errorClass}>Las contraseñas no coinciden!</p>
        <button className="btn btn-info" onClick={retrocedePaso}>
          Anterior
        </button>
        <button type="submit" className="btn btn-info">
          Siguiente
        </button>
      </form>
    </>
  );
};

Paso2.propTypes = {
  avanzaPaso: PropTypes.func.isRequired,
  retrocedePaso: PropTypes.func.isRequired,
  datosRegistro: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    repitePassword: PropTypes.string.isRequired,
  }).isRequired,
};
