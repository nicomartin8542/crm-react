import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ClienteNuevo, {
  action as actionClienteNuevo,
} from "./pages/ClienteNuevo";
import Index, { loader as loaderIndex } from "./pages/Index";
import ErrorPage from "./components/ErrorPage";
import EditarCliente, {
  loader as editarLoader,
  action as editarAction,
} from "./pages/EditarCliente";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: loaderIndex,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cliente/nuevo",
        element: <ClienteNuevo />,
        action: actionClienteNuevo,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cliente/:clienteId/editar",
        element: <EditarCliente />,
        errorElement: <ErrorPage />,
        loader: editarLoader,
        action: editarAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
