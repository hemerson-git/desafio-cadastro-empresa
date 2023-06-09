import { Input } from "../Input";

export function FormCreateBusiness() {
  return (
    <form className="flex flex-col gap-y-4 p-4">
      <Input
        label="Nome da Empresa"
        placeholder="Nome da Empresa"
        id="name"
        type="text"
      />
      <Input label="CNPJ" placeholder="CNPJ" id="cnpj" type="text" />
      <Input
        label="CEP"
        placeholder="CEP"
        id="cep"
        type="text"
        mask="99999-999"
      />
    </form>
  );
}
