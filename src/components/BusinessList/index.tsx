import { useState } from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { Trash, Pencil } from "phosphor-react";
import { AlertDialog } from "../AlertDialog";

const business = [
  {
    id: "id1",
    name: "Customer 1",
    cnpj: "Customer 1 CNPJ",
    cep: "Customer 1 CEP",
  },
  {
    id: "id2",
    name: "Customer 2",
    cnpj: "Customer 2 CNPJ",
    cep: "Customer 2 CEP",
  },
  {
    id: "id3",
    name: "Customer 3",
    cnpj: "Customer 3 CNPJ",
    cep: "Customer 3 CEP",
  },
];

type CustomerProps = {
  id: string;
  name: string;
  cnpj: string;
  cep: string;
};

export function BusinessList() {
  const [selectedCustomer, setSelectedCustomer] =
    useState<CustomerProps | null>(null);
  const [customers, setCustomers] = useState<CustomerProps[]>(business);

  function onConfirm(id: string) {
    const filteredBusiness = customers.filter((customer) => customer.id !== id);
    setCustomers([...filteredBusiness]);
  }

  function handleSelectCustomer(customer: CustomerProps) {
    console.log(customer);
    setSelectedCustomer(customer);
  }

  return (
    <table className="w-full rounded-t-md">
      <thead>
        <tr className="w-full text-center bg-purple-500 py-2">
          <th className="py-2">Nome</th>
          <th className="py-2">CNPJ</th>
          <th className="py-2">CEP</th>
          <th className="py-2">Ações</th>
        </tr>
      </thead>

      <AlertDialogPrimitive.Root>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="px-4 py-2">{customer.name}</td>
              <td className="px-4 py-2">{customer.cnpj}</td>
              <td className="px-4 py-2">{customer.cep}</td>
              <td className="px-4 py-2">
                <button className="flex items-center justify-center gap-2 hover:underline underline-offset-2">
                  <Pencil />
                  Editar
                </button>

                <AlertDialogPrimitive.Trigger
                  className="flex items-center justify-center gap-2 hover:underline underline-offset-2"
                  onClick={() => handleSelectCustomer(customer)}
                >
                  <Trash />
                  Excluir
                </AlertDialogPrimitive.Trigger>
              </td>
            </tr>
          ))}
        </tbody>

        {selectedCustomer && (
          <AlertDialog
            title="Apagar Empresa"
            description={`Você tem certeza que deseja apagar a empresa ${selectedCustomer.name}`}
            onConfirm={() => onConfirm(selectedCustomer.id)}
          />
        )}
      </AlertDialogPrimitive.Root>
    </table>
  );
}
