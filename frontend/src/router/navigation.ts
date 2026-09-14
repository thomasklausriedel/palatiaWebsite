import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  title: string;
  link: string;
  icon: LucideIcon;
}

export interface RouteHandle {
  navigation?: NavigationItem;
}

export interface RootRouteHandle {
  navigation?: NavigationItem[];
}

export const getNavigationItems = (handle: unknown): NavigationItem[] => {
  if (
    typeof handle !== "object" ||
    handle === null ||
    !("navigation" in handle) ||
    !Array.isArray(handle.navigation)
  ) {
    return [];
  }

  return handle.navigation;
};
