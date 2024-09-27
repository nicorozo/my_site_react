import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import ServicesPage from "./pages/Services/ServicesPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ProjectsPage from "./pages/Projects/ProjectsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/services",
    element: <ServicesPage />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
    errorElement: <div>404 Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
