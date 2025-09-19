import React, { Profiler } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import About from "../src/pages/About.jsx";
import Contact from "../src/pages/Contact.jsx";
import Home from "../src/pages/Home.jsx";

import RootLayout from "./layout/RootLayout.jsx";
import Logout from "./pages/Logout.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/profile.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="logout" element={<Logout />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
