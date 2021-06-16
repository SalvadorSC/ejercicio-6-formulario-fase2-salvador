import { useState } from "react";

export const useFormulario = (datosIniciales) => {
  const [datos, setDatos] = useState(datosIniciales);
  const setDato = (e) => {
    setDatos({
      ...datos,
      [e.target.id]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    datos,
    setDato,
  };
};
