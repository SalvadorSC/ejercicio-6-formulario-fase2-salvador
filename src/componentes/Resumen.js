import PropTypes from "prop-types";

export const Resumen = (props) => {
  const {
    datosPersonales: { nombre, apellidos, email, fechaNacimiento },
    datosRegistro: { username, password },
    retrocedePaso,
  } = props;
  return (
    <>
      <h2>Resumen</h2>
      <div>
        <p>{nombre}</p>
        <p>{apellidos}</p>
        <p>{email}</p>
        <p>{fechaNacimiento}</p>
        <p>{username}</p>
        <p>{password}</p>
      </div>
      <button className="btn btn-info" onClick={retrocedePaso}>
        Anterior
      </button>
    </>
  );
};

Resumen.propTypes = {
  retrocedePaso: PropTypes.func.isRequired,
};
