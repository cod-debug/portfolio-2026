import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Layout from "./layouts/Layout";
import ExperiencePage from "./pages/ExperiencePage";

const router = createHashRouter([
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
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App
