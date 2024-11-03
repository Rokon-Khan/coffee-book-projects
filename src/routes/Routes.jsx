import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layouts/MainLaout";
import Coffees from "../pages/Coffees";
import Dasboard from "../pages/Dasboard";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaout></MainLaout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/coffees",
            element: <Coffees></Coffees>
        },
        {
            path: "/dashboard",
            element: <Dasboard></Dasboard>
        },
      ]
    },
    
  ]);

export { router };

