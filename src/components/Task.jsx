/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//rafc para crear la estruxtura de una funcion
import App from "../App.css";
import {
  BsPencilFill,
  BsFillTrash3Fill,
  BsPlusSquareFill,
} from "react-icons/bs";

export default function Task({ nombre, estaCompletada }) {
  return (
    <div className="contenedor">
      <div className="checks">
        <input checked={estaCompletada} type="checkbox" />
        <p className={`${estaCompletada ? "tachado" : ""}`}>{nombre}</p>
      </div>

      <div className="botones">
        <button style={{ backgroundColor: "yellow" }}>
          <BsPencilFill />
        </button>
        <button style={{ backgroundColor: "red" }}>
          <BsFillTrash3Fill />
        </button>
      </div>
    </div>
  );
}
