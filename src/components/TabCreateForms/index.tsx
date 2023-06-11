import * as Tabs from "@radix-ui/react-tabs";
import { FormCreateSupplier } from "../FormCreateSupplier";
import { FormCreateBusiness } from "../FormCreateBusiness";

export function TabCreateForms() {
  return (
    <Tabs.Root className="w-full">
      <Tabs.List className="flex w-full gap-2 bg-purple-400 pt-1 rounded-t-md">
        <Tabs.Trigger
          value="tab1"
          className="
                flex flex-1 items-center justify-center h-10
                data-[state=active]:border-b-4 data-[state=active]:border-b-cyan-500
              "
        >
          Cadastrar Empresa
        </Tabs.Trigger>

        <Tabs.Trigger
          value="tab2"
          className="
                flex flex-1 items-center justify-center 
                data-[state=active]:border-b-4 data-[state=active]:border-b-cyan-500"
        >
          Cadastrar Fornecedor
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab1">
        <FormCreateSupplier />
      </Tabs.Content>

      <Tabs.Content value="tab2">
        <FormCreateBusiness />
      </Tabs.Content>
    </Tabs.Root>
  );
}
