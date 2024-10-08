import { createBrowserRouter } from "react-router-dom";
import BookingDashboard from "../components/dashboard/BookingDashboard";
import RoomDashboard from "../components/dashboard/RoomDashboard";
import SlotDashboard from "../components/dashboard/SlotDashboard";
import UserDashboard from "../components/dashboard/UserDashboard";
import {
  PrivateAdminRoute,
  PrivateUserRoute,
} from "../components/layout/PrivateRouteLayout";
import RootLayout from "../components/layout/RootLayout";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyBooking from "../pages/MyBooking";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Room from "../pages/Room";
import Rooms from "../pages/Rooms";
import Success from "../pages/Success";

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
      {
        path: "/rooms/:id",
        element: (
          <PrivateUserRoute>
            <Room />
          </PrivateUserRoute>
        ),
      },
      {
        path: "/my-booking",
        element: (
          <PrivateUserRoute>
            <MyBooking />
          </PrivateUserRoute>
        ),
      },
      {
        path: "/success",
        element: (
          <PrivateUserRoute>
            <Success />
          </PrivateUserRoute>
        ),
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateUserRoute>
            <Booking />
          </PrivateUserRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateAdminRoute>
            <Dashboard />
          </PrivateAdminRoute>
        ),
        children: [
          { index: true, element: <RoomDashboard /> },
          { path: "slots", element: <SlotDashboard /> },
          { path: "booking", element: <BookingDashboard /> },
          { path: "users", element: <UserDashboard /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
