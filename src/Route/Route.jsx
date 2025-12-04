import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import AllGame from "../Pages/AllGame";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import Profile from "../Pages/UpdateProfile";
import Details from "../Component/Details";
import PrivateRoute from "../privateroute/PrivateRoute";
import ResetPassword from "../Component/ResetPassword";
import Error from "../Component/Error";
import LeaderBoard from "../Pages/LeaderBoard";
import MyProfile from "../Pages/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/allGame",
        element: <AllGame></AllGame>,
      },
      {
        path: "/allGame/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/leaderBoard",
        element: (
          <PrivateRoute>
            <LeaderBoard></LeaderBoard>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path:"/auth/my-profile",
        element:<MyProfile></MyProfile>

      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/Profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/forgetPassword",
        element: (
          
            <ResetPassword></ResetPassword>
          
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);