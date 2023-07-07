import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home/Home";
import Test from "../pages/Test/Test";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Classes from "../pages/Classes/Classes";
import Instractors from "../pages/Instractors/Instractors";
import Dashboard from "../layout/Dashboard/Dashboard/Dashboard";
import ManageClass from "../pages/Dashboard/Admin/Classes/ManageClass";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers/AllUsers";

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
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instractors",
        element: <Instractors></Instractors>,
      },
      {
        path: "/register",
        element: (
          <Register></Register>
          // <ConsRoute>
          // </ConsRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <Login></Login>
          // <ConsRoute>
          // </ConsRoute>
        ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },

  // Dashboard
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "admin/manage-class",
        element: <ManageClass></ManageClass>,
      },
      {
        path: "admin/manage-users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
