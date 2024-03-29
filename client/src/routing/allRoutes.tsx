import { createBrowserRouter } from "react-router-dom";
import { Home } from "../home/home";
import { About } from "../about/about";
import { Services } from "../services/services";
import { Projects } from "../projects/projects";
import { Contact } from "../contact/contact";
import { DetailsProject } from "../projects/details-project/details-project";

{
  /* BS */
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects/:projectId",
    element: <DetailsProject />,
  },
]);
