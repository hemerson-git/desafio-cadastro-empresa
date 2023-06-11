import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FormCreateBusiness } from "../FormCreateBusiness";
import { TabCreateForms } from "../TabCreateForms";
import { BusinessList } from "../BusinessList";

const router = createBrowserRouter([{ path: "/", element: <BusinessList /> }]);

export function Router() {
  return <RouterProvider router={router} />;
}
