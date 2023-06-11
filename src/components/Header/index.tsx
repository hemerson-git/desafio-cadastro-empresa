import { Plus } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-zinc-900 flex justify-end pb-6">
      <Link
        to="/cadastrar"
        className="flex items-center justify-center gap-2 py-2 px-4 rounded-sm bg-purple-500 hover:bg-purple-400 transition-colors"
      >
        <Plus />
        Criar Cadastro
      </Link>
    </header>
  );
}
