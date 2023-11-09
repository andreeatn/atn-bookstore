import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "pages/HomePage";
import VolumesPage from "pages/VolumesPage";
import CartPage from "pages/CartPage";
import VolumeDetailsPage from "pages/VolumeDetailsPage";
import LegalTermsPage from "pages/LegalTermsPage";
import ContactPage from "pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/legal", element: <LegalTermsPage /> },
      { path: "/volumes", element: <VolumesPage /> },
      { path: "/volumes/:id", element: <VolumeDetailsPage /> },
    ],
  },
]);

export default router;
