import * as Tabs from "@radix-ui/react-tabs";
import { BusinessList } from "../BusinessList";
import { SupplierList } from "../SupplierList";

export function TabLists() {
  return (
    <Tabs.Root className="w-full" defaultValue="tab1">
      <Tabs.List className="flex w-full gap-2 bg-purple-400 pt-1 rounded-t-md">
        <Tabs.Trigger
          value="tab1"
          className="
                flex flex-1 items-center justify-center h-10
                data-[state=active]:border-b-4 data-[state=active]:border-b-cyan-500
              "
        >
          Empresas
        </Tabs.Trigger>

        <Tabs.Trigger
          value="tab2"
          className="
                flex flex-1 items-center justify-center 
                data-[state=active]:border-b-4 data-[state=active]:border-b-cyan-500"
        >
          Fornecedores
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab1">
        <BusinessList />
      </Tabs.Content>

      <Tabs.Content value="tab2">
        <SupplierList />
      </Tabs.Content>
    </Tabs.Root>
  );
}
