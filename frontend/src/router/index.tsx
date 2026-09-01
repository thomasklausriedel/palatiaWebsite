import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { AboutPage } from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import { ProductsPage } from "../pages/ProductsPage";
import { DirectionsPage } from "../pages/DirectionsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true, // Standardroute für "/"
        element: <HomePage />,
      },
      {
        path: "about", // Route für "/about"
        element: <AboutPage />,
      },
      {
        path: "contact", // Route für "/contact"
        element: <ContactPage />,
      },
      {
        path: "products", // Route für "/products"
        element: <ProductsPage />,
      }, 
      {
        path: "directions", // Route für "/directions"
        element: <DirectionsPage />,
      }
    ],
  },
  {
    path: "*", // Fängt alle nicht gemappten URLs ab
    element: <NotFoundPage />,
  },
]);