import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layouts/MainLaout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaout></MainLaout>
    },
    
  ]);

export { router };

