import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Room from "../pages/Room";
import Rooms from "../pages/Rooms";

export const rootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/rooms", element: <Rooms /> },
      { path: "/rooms/:id", element: <Room /> },
      { path: "/booking", element: <Booking /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
