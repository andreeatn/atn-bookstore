import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "pages/HomePage";
import VolumesPage from "pages/VolumesPage";
import VolumeDetailsPage from "pages/VolumeDetailsPage";
import CartPage from "pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/volumes", element: <VolumesPage /> },
      { path: "/volumes/:id", element: <VolumeDetailsPage /> },
    ],
  },
]);

export default router;
