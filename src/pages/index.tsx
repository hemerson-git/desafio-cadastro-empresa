import { BusinessList } from "../components/BusinessList";
import { DefaultLayout } from "../layout/default";

export function Home() {
  return (
    <DefaultLayout>
      <BusinessList />
    </DefaultLayout>
  );
}
