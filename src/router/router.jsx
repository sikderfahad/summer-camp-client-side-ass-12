import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home/Home";
import Test from "../pages/Test/Test";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layout/Dashboard/Dashboard/Dashboard";
import ManageClass from "../pages/Dashboard/Admin/Classes/ManageClass";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers/AllUsers";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import Instructors from "../pages/Instructors/Instructors";
import NotFound from "../layout/NotFound/NotFound";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass/SelectedClass/SelectedClass";
import EnrolledClass from "../pages/Dashboard/Student/EnrolledClass/EnrolledClass";
import Payment from "../pages/Dashboard/Payment/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";

export const baseUrl = "https://summer-camp-music-server.vercel.app";
// export const baseUrl = "http://localhost:3000";

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
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
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
      {
        path: "instructor/add-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "instructor/my-class",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "student/selected-class",
        element: (
          <PrivateRoute>
            <SelectedClass></SelectedClass>
          </PrivateRoute>
        ),
      },
      {
        path: "student/enrolled-class",
        element: (
          <PrivateRoute>
            <EnrolledClass></EnrolledClass>
          </PrivateRoute>
        ),
      },
      {
        path: "student/payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>,
          </PrivateRoute>
        ),
      },

      {
        path: "student/payment/:id",
        element: (
          <PrivateRoute>
            <Payment></Payment>,
          </PrivateRoute>
        ),
      },
    ],
  },

  // 4O4 Not Found page
  {
    path: "/",
    element: <NotFound></NotFound>,
    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
