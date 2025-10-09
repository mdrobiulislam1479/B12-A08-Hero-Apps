import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import PageError from "../Pages/PageError";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PageError></PageError>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/apps/:id",
        Component: AppDetails,
      },
    ],
  },
]);
