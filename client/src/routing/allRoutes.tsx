import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "../shared/components/navbar/navbar";
import { Home } from "./home/home";
import { Slider } from "../shared/components/slider/slider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Slider />,

    children: [
      {
        //That tells the router to match and render this route when the user is at the parent route's exact path,
        // so there are no other child routes to render in the <Outlet>.
        index: true,
        element: <Home />,
      },

      //   {
      //     path: "/login",
      //     element: <Login />,
      //   },
      //   {
      //     path: "",
      //     element: <CreatePost />,
      //   },
    ],
  },
]);
