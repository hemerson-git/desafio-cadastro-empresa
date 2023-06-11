import { useState } from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { Trash, Pencil } from "phosphor-react";
import { AlertDialog } from "../AlertDialog";

const db_suppliers = [
  {
    id: "id1",
    name: "Supplier1 1",
    cnpj: "Supplier1 1 CNPJ",
    cep: "Supplier1 1 CEP",
    email: "E-mail 1 CEP",
  },
  {
    id: "id2",
    name: "Supplier1 2",
    cnpj: "Supplier1 2 CNPJ",
    cep: "Supplier1 2 CEP",
    email: "E-mail 2 CEP",
  },
  {
    id: "id3",
    name: "Supplier1 3",
    cnpj: "Supplier1 3 CNPJ",
    cep: "Supplier1 3 CEP",
    email: "E-mail 3 CEP",
  },
];

type SupplierProps = {
  id: string;
  name: string;
  cnpj: string;
  cep: string;
  email: string;
};

export function SupplierList() {
  const [selectedSupplier, setSelectedSupplier] =
    useState<SupplierProps | null>(null);
  const [suppliers, setSuppliers] = useState<SupplierProps[]>(db_suppliers);

  function onConfirm(id: string) {
    const filteredBusiness = suppliers.filter((customer) => customer.id !== id);
    setSuppliers([...filteredBusiness]);
  }

  function handleSelectSupplier(supplier: SupplierProps) {
    console.log(supplier);
    setSelectedSupplier(supplier);
  }

  return (
    <table className="w-full rounded-t-md">
      <thead>
        <tr className="w-full text-center bg-purple-500 py-2">
          <th className="py-2">Nome</th>
          <th className="py-2">CNPJ</th>
          <th className="py-2">CEP</th>
          <th className="py-2">E-mail</th>
          <th className="py-2">Ações</th>
        </tr>
      </thead>

      <AlertDialogPrimitive.Root>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td className="px-4 py-2">{supplier.name}</td>
              <td className="px-4 py-2">{supplier.cnpj}</td>
              <td className="px-4 py-2">{supplier.cep}</td>
              <td className="px-4 py-2">{supplier.email}</td>
              <td className="px-4 py-2">
                <button className="flex items-center justify-center gap-2 hover:underline underline-offset-2">
                  <Pencil />
                  Editar
                </button>

                <AlertDialogPrimitive.Trigger
                  className="flex items-center justify-center gap-2 hover:underline underline-offset-2"
                  onClick={() => handleSelectSupplier(supplier)}
                >
                  <Trash />
                  Excluir
                </AlertDialogPrimitive.Trigger>
              </td>
            </tr>
          ))}
        </tbody>

        {selectedSupplier && (
          <AlertDialog
            title="Apagar Empresa"
            description={`
              Você tem certeza que deseja apagar o fornecedor ${selectedSupplier.name}?
              Esta ação é irreversível
            `}
            onConfirm={() => onConfirm(selectedSupplier.id)}
          />
        )}
      </AlertDialogPrimitive.Root>
    </table>
  );
}
