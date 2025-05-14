import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";

import Home from "../pages/Home";
import Appointment from "../pages/Appointment";
import About from "../pages/About";
import Contact from "../sections/Contact";
import Reviews from "../pages/Reviews";
import Login from "../pages/Login";
import Register from "../pages/Register";

import DashboardLayout from "../components/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import MyAppointment from "../pages/MyAppointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "appointment", element: <Appointment /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "reviews", element: <Reviews /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "my-appointment", element: <MyAppointment /> }, // nested route
    ],
  },
]);

export default router;
