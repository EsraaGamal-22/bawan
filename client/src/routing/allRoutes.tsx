import { createBrowserRouter } from "react-router-dom";
import { Home } from "../home/home";
import { Slider } from "../shared/components/slider/slider";

{/* BS */}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Slider />,

    children: [
      {
        index: true,
        element: <Home />,
      },

    ],
  },
]);
