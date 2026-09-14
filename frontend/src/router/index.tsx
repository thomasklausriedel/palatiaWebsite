import { createBrowserRouter } from "react-router-dom";
import { Home, Info, MapPin, Phone, ScrollText } from "lucide-react";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { AboutPage } from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import { ArticlesPage } from "../pages/ArticlesPage";
import { DirectionsPage } from "../pages/DirectionsPage";
import type { RouteHandle } from "./navigation";

const childRoutes = [
  {
    index: true,
    element: <HomePage />,
    handle: {
      navigation: { title: "Home", link: "/", icon: Home },
    } satisfies RouteHandle,
  },
  {
    path: "about",
    element: <AboutPage />,
    handle: {
      navigation: { title: "About", link: "/about", icon: Info },
    } satisfies RouteHandle,
  },
  {
    path: "contact",
    element: <ContactPage />,
    handle: {
      navigation: { title: "Contact", link: "/contact", icon: Phone },
    } satisfies RouteHandle,
  },
  {
    path: "articles",
    element: <ArticlesPage />,
    handle: {
      navigation: { title: "FUZ-Artikel", link: "/articles", icon: ScrollText },
    } satisfies RouteHandle,
  },
  {
    path: "directions",
    element: <DirectionsPage />,
    handle: {
      navigation: { title: "Directions", link: "/directions", icon: MapPin },
    } satisfies RouteHandle,
  },
];

const navigationItems = childRoutes.flatMap((route) =>
  route.handle.navigation ? [route.handle.navigation] : [],
);

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    handle: { navigation: navigationItems },
    children: childRoutes,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);