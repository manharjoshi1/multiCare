import * as React from "react";
import { useRoutes } from "react-router-dom";
import LoginBackground from "../views/pages/Login/loginBackground";
import Register from "../views/Register/Register";
import SignIn from "../views/SignIn/SignIn";

function Router() {
  let element = useRoutes([
    {
        path: "/",
      element: <LoginBackground />,
      children: [
        {   
          path: "signin",
          element: <SignIn />,
        },
        {
        path: "register",
        element: <Register />,
      }
      ],
    }
  ]);
  return element;
}
export default Router;