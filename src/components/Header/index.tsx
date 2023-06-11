import { Plus } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to="/cadastrar">
        <Plus />
        Criar Cadastro
      </Link>
    </header>
  );
}
