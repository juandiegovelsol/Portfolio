import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Curriculum } from "../pages/Curriculum";
import { Resume } from "../pages/Resume";
import { Contact } from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Page not found........</div>,
  },
  { path: "/cv", element: <Curriculum /> },
  { path: "/resume", element: <Resume /> },
  { path: "/contact", element: <Contact /> },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;
export { CustomRouter };
