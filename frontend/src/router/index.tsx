import { createBrowserRouter } from "react-router-dom";
import { CalendarDays, House, MapPin, ScrollText, UsersRound, Info, DoorOpen} from "lucide-react";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { HousePage } from "../pages/HousePage";
import { ArticlesPage } from "../pages/ArticlesPage";
import { DirectionsPage } from "../pages/DirectionsPage";
import type { RouteHandle } from "./navigation";
import { ProgramPage } from "../pages/ProgramPage";
import { ImpressumPage } from "../pages/ImpressumPage";

const childRoutes = [
  {
    index: true,
    element: <HomePage />,
    handle: {
      navigation: { title: "Startseite", link: "/", icon: House },
    } satisfies RouteHandle,
  },
  {
    path: "program",
    element: <ProgramPage />,
    handle: {
      navigation: { title: "Programm", link: "/program", icon: CalendarDays },
    } satisfies RouteHandle,
  },
  {
    path: "house",
    element: <HousePage />,
    handle: {
      navigation: { title: "Haus", link: "/house", icon: DoorOpen },
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
      navigation: { title: "Anfahrt", link: "/directions", icon: MapPin },
    } satisfies RouteHandle,
  },
  {
    path: "impressum",
    element: <ImpressumPage />,
    handle: {
      navigation: { title: "Impressum", link: "/impressum", icon: Info },
    } satisfies RouteHandle,
  }
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