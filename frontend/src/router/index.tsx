import { createBrowserRouter } from "react-router-dom";
import { House, MapPin, ScrollText, UsersRound } from "lucide-react";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { HousePage } from "../pages/HousePage";
import { ArticlesPage } from "../pages/ArticlesPage";
import { DirectionsPage } from "../pages/DirectionsPage";
import type { RouteHandle } from "./navigation";

const childRoutes = [
  {
    index: true,
    element: <HomePage />,
    handle: {
      navigation: { title: "Wir", link: "/", icon: UsersRound },
    } satisfies RouteHandle,
  },
  {
    path: "house",
    element: <HousePage />,
    handle: {
      navigation: { title: "Haus", link: "/house", icon: House },
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