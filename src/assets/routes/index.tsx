import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TabCreateForms } from "../../components/TabCreateForms";
import { Home } from "../../pages";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cadastrar", element: <TabCreateForms /> },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
