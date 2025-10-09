import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import installation from "../Pages/installation";
import AppDetails from "../Pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <p>404</p>,
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
        Component: installation,
      },
      {
        path: "/app/:id",
        Component: AppDetails,
      },
    ],
  },
]);
