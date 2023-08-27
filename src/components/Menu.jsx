import { Link } from "react-router-dom";
import "../App.css";
function Menu() {
  return (
    <div>
      <ul className="menu">
        <li className="item-menu">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="item-menu">
          <Link to='/tareas'>Mis tareas</Link>
        </li>
        <li className="item-menu">
          <Link to='/about'>Sobre Nosotros</Link>
        </li>
       
      </ul>
    </div>
  );
}

export { Menu };
