import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Layout from "./layouts/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App
