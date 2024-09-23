import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";

export const rootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
