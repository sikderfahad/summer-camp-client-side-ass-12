import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home/Home";
import Test from "../pages/Test/Test";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/test",
        element: <Test></Test>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
