import React from "react";
import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main";
import { DetailsPage } from "./pages/Details";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/details/:todoId",
    element: <DetailsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
