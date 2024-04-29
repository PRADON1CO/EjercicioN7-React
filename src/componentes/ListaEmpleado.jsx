import React from "react";
import EmpeladoRow from "./EmpeladoRow";
import "../style/listaEmpleados.css";
import { Card, ListGroup } from "react-bootstrap";

const ListaEmpleado = () => {
  const empleados = [
    { id: 1, fullName: "Luis García", title: "Gerente General", department: "Gerencia", pic: "https://cdn-icons-png.flaticon.com/512/219/219969.png" },
    { id: 2, fullName: "María Rodríguez", title: "Directora de Marketing", department: "Marketing", pic: "https://cdn-icons-png.flaticon.com/512/3180/3180569.png" },
    { id: 3, fullName: "Julieta López", title: "Jefa de Finanzas", department: "Finanzas", pic: "https://cdn-icons-png.flaticon.com/512/2922/2922565.png" },
    { id: 4, fullName: "Alvaro Sánchez", title: "Líder de Proyectos", department: "Proyectos", pic: "https://i.pinimg.com/1200x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" },
    { id: 5, fullName: "Carlos Martínez", title: "Diseñador Gráfico", department: "Diseño", pic: "https://w7.pngwing.com/pngs/304/305/png-transparent-man-with-formal-suit-illustration-web-development-computer-icons-avatar-business-user-profile-child-face-web-design.png" },
    { id: 6, fullName: "Laura Gómez", title: "Desarrolladora Frontend", department: "Desarrollo", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWS90r4vr7kLPZrK8UnDzGpWb57666dMTmjAgUdgj5Qwymj-mTWD5G616c97yGok-Dm8&usqp=CAU" },
    { id: 7, fullName: "Pilar Fernández", title: "Ingeniera de Software", department: "Desarrollo", pic: "https://cdn-icons-png.flaticon.com/512/3532/3532618.png" }
  ];
  console.log("hola");
  console.log(empleados);

  return (
    <div className=" d-flex justify-content-center aling-items-center">
      <Card id="cardPrincipal">
        <ListGroup variant="flush">
          {empleados.map((objeto) => (
            <EmpeladoRow key={objeto.id} objetoEmpleado={objeto} />
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default ListaEmpleado;