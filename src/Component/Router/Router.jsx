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
      path:'projects/:id',
      element:<ProjectsDetails></ProjectsDetails>,
      //loader: ({ params }) => fetch(`project.json/${params.id}`)
  },
  {
      path:'/blog',
      element:<Blog></Blog>
  }
  ]);