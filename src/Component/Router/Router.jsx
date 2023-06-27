import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Home/Home";
import ProjectsDetails from "../ProjectsDetails/ProjectsDetails";
import Blog from "../Blog/Blog";
  export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
      path:'project',
      element:<ProjectsDetails></ProjectsDetails>,
    },
    {
      path:'project/:id',
      element:<ProjectsDetails></ProjectsDetails>,
    },
  {
      path:'/blog',
      element:<Blog></Blog>
  }
  ]);