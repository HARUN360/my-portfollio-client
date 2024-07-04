import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../page/Home";
import Skil from "../page/Skil";
import About from "../page/About";
import Education from "../page/Education";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path: '/skil',
          element: <Skil></Skil>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path:'/education',
          element: <Education></Education>
        }
      ]
    },
  ]);
  export default router;