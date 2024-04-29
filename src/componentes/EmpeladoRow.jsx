import React from "react";
import { ListGroupItem } from "react-bootstrap";
import "../style/empleadoRow.css"
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpeladoRow = ({objetoEmpleado}) => {
  return (
    <ListGroupItem className="d-flex">
      <EmpleadoAvatar objetoEmpleado={objetoEmpleado} />
      <div className="mx-3">
        <p id="nombre">{objetoEmpleado.fullName}</p>
        <div className="d-flex caracteristicas">
          <p>{objetoEmpleado.title}</p>
          <p id="puesto">{objetoEmpleado.department}</p>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default EmpeladoRow;
