
import { BsPlusCircleFill } from "react-icons/bs";
import { BsPencilFill, BsFillTrash3Fill } from "react-icons/bs";
export default function SobreNosotros() {
  return (
    <div><h1>Sobre Nosotros</h1>
    <h6>EfficientDay fue desarrollada  utilizando la libreria de Javascript llamada React.
      
    A continuación te voy a guiar a través de las increíbles características con las que cuenta esta herramienta indispensable en tu día a día. </h6>
       
       <ul>

        <li> <BsPlusCircleFill className="icon2"/> te permite crear tareas nuevas de forma rápida y sencilla</li>
        <li><BsPencilFill className="icon2"/> te permite actualizar las existentes, ya sea su descripción o marcarlas con pendientes o ejecutadas.</li>
        <li><BsFillTrash3Fill className="icon2"/> te permite quitar las tareas que ya no ocupas o las que ya tienes culminadas.</li>
       </ul>
       - 

<h6>En resumen, la aplicación de la lista de tareas es mucho más que una simple aplicación es una herramienta que te mantendrá organizado y eficiente en tus actividades diarias.</h6>
    
    
    </div>
  )
}
