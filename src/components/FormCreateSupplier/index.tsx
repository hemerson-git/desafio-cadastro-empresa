import { ChangeEvent, useState } from "react";
import { Input } from "../Input";

export function FormCreateSupplier() {
  const [hasCNPJ, setHasCNPJ] = useState(false);

  function ValidateCEP(cep: string) {
    console.log(cep);
  }

  function changeType(e: string) {
    e === "pf" ? setHasCNPJ(false) : setHasCNPJ(true);
  }

  return (
    <form action="" className="flex flex-col gap-y-4 p-4">
      <div className="flex justify-between">
        <div className="flex flex-1 items-center justify-center gap-2">
          <input
            type="radio"
            name="type"
            id="type1"
            value="pf"
            defaultChecked
            onChange={(e) => changeType(e.target.value)}
          />
          <label htmlFor="type1">Pessoa Física</label>
        </div>

        <div className="flex flex-1 items-center justify-center gap-2">
          <input
            type="radio"
            name="type"
            id="type2"
            value="cpf"
            onChange={(e) => changeType(e.target.value)}
          />
          <label htmlFor="type2">Pessoa Jurídica</label>
        </div>
      </div>

      <Input
        label="Nome do Fornecedor"
        placeholder="Nome da Empresa"
        id="name"
        type="text"
      />
      {hasCNPJ ? (
        <Input label="CNPJ" placeholder="CNPJ" id="cnpj" type="text" />
      ) : (
        <>
          <Input
            label="RG"
            placeholder="RG"
            id="rg"
            type="text"
            mask="99.999.999.99"
          />

          <Input
            label="CPF"
            placeholder="CPF"
            id="cpf"
            type="text"
            mask="999.999.999-99"
          />
          <Input label="Data de Nascimento" id="cpf" type="date" />
        </>
      )}

      <Input label="E-mail" placeholder="E-mail" id="email" type="email" />
      <Input
        label="CEP"
        placeholder="CEP"
        id="cep"
        type="text"
        mask="99999-999"
        onChange={(e) => ValidateCEP(e.target.value)}
      />
    </form>
  );
}
