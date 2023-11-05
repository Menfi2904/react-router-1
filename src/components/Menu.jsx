import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul style={{ color: "white" }}>
      <li>
        <Link to={"./"}>Home</Link>
      </li>
      <li>
        <Link to={"./sobrenosotros"}>SobreNosotros</Link>
      </li>
      <li>
        <Link to={"./tareas"}>Tareas</Link>
      </li>
    </ul>
  );
}
