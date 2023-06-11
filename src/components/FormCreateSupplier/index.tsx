import { useState, FormEvent } from "react";
import { Input } from "../Input";
import { CepAPI } from "../../services/CEPApi";
import { convertMillisecondsToYears } from "../../utils/convertMillisecondsToYears";

type AddressProps = {
  cep: string;
  uf: string;
  cidade: string;
  bairro: string;
  logradouro: string;
};

export function FormCreateSupplier() {
  const [hasCNPJ, setHasCNPJ] = useState(false);
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<AddressProps | null>(null);
  const [supplierBirth, setSupplierBirth] = useState(
    new Date().toISOString().slice(0, 10)
  );

  async function ValidateCEP(cep: string) {
    const parsedCep = Number(cep.replace("-", ""));

    if (!isNaN(parsedCep) && parsedCep >= 8) {
      const result = await CepAPI.get(`/${parsedCep}`);
      console.log(result.data);
      setAddress(result.data);
    }
  }

  function changeType(e: string) {
    e === "pf" ? setHasCNPJ(false) : setHasCNPJ(true);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const supplierAge = convertMillisecondsToYears(
      Number(new Date()) - Number(new Date(supplierBirth))
    );

    if (address?.uf === "PR" && supplierAge < 18) {
      alert("O fornecedor deve ser maior de idade");
      return;
    }
  }

  return (
    <form className="flex flex-col gap-y-4 p-4" onSubmit={handleSubmit}>
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

          <Input
            label="Data de Nascimento"
            id="cpf"
            type="date"
            value={supplierBirth}
            onChange={(e) => setSupplierBirth(e.target.value)}
          />
        </>
      )}

      <Input label="E-mail" placeholder="E-mail" id="email" type="email" />
      <Input
        label="CEP"
        placeholder="CEP"
        id="cep"
        type="text"
        mask="99999-999"
        value={cep}
        onChange={(e) => {
          ValidateCEP(e.target.value);
          setCep(e.target.value);
        }}
      />

      <button
        type="submit"
        className="
          w-full py-2 px-4 flex items-center justify-center rounded-sm border mt-4
          border-purple-500 hover:bg-purple-500 transition-colors"
      >
        Cadastrar
      </button>
    </form>
  );
}
