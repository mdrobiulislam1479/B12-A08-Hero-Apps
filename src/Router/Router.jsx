import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import installation from "../Pages/installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    
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
    ],
  },
]);
