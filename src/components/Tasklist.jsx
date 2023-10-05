/* eslint-disable no-unused-vars */
//rafc para crear la estruxtura de una funcion

import { useState, useEffect } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import {
  BsPencilFill,
  BsFillTrash3Fill,
  BsPlusSquareFill,
} from "react-icons/bs";
import Task from "./Task";

export default function Tasklist() {
  const [tareasArray, settareasArray] = useState([
    { descripcion: "Aprender HTML", estaCompletada: true, id: 1 },
    { descripcion: "Aprender CSS", estaCompletada: true, id: 2 },
    { descripcion: "Aprender JAVASCRIPT", estaCompletada: true, id: 3 },
    { descripcion: "Aprender REACT", estaCompletada: true, id: 4 },
    { descripcion: "Aprender HOOKS", estaCompletada: true, id: 5 },
    { descripcion: "Aprender NODE & Npm", estaCompletada: false, id: 6 },
  ]);

  return (
    <div>
      <form>
        <input type="text" name="descripcion" placeholder="Tareas a realizar" />

        <button style={{ backgroundColor: "purple" }}>
          <BsPlusCircleFill />
        </button>
      </form>

      {tareasArray.map((tarea) => (
        <Task
          key={tarea.id}
          nombre={tarea.descripcion}
          estaCompletada={tarea.estaCompletada}
        />
      ))}

      <p>Tareas {tareasArray.length}, terminadas , pendientes </p>
      <br></br>
      <button>Eliminar las tareas terminadas</button>
    </div>
  );
}
