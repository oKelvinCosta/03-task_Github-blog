import { createHashRouter } from "react-router-dom";
import Home from "@/pages/Home";
import AppLayout from "@/pages/_layouts/AppLayout";
import Post from "@/pages/Post";

export const Router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/post/:number",
        element: <Post />,
      },
    ],
  },
]);
