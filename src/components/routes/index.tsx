import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FormCreateBusiness } from "../FormCreateBusiness";

const router = createBrowserRouter([
  { path: "/", element: <FormCreateBusiness /> },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
