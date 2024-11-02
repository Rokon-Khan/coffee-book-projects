import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Coffees from './Coffees/Coffees';
import Dashbaord from './Dashboard/Dashbaord';
import Home from './Home/Home';
import './index.css';

const router = createBrowserRouter([
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
    element: <Dashbaord></Dashbaord>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
