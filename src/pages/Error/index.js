import { Link } from "react-router-dom";
import "./style.css";

function Erro() {
  return (
    <>
      {" "}
      <div className="not-found">
        <h1> 404</h1>
        <h2>Page not Found</h2>
        <Link to="/"> Return to Home Page </Link>
      </div>
    </>
  );
}

export default Erro;
