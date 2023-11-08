import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "pages/HomePage";
import VolumesPage from "pages/VolumesPage";
import VolumeDetailsPage from "pages/VolumeDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/volumes", element: <VolumesPage /> },
      { path: "/volumes/:id", element: <VolumeDetailsPage /> },
    ],
  },
]);

export default router;
