import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router";

import Login from "../src/pages/Login.jsx";
import SignUp from "../src/pages/SignUp.jsx";
import Home from "../src/pages/Home.jsx";

import RootLayout from "./layout/RootLayout.jsx";
import Logout from "./pages/Logout.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/profile.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import PublicLayout from "./layout/PublicLayout.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log({ authUser });

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public routes: login/signup */}
        <Route element={<PublicLayout />}>
          <Route
            path="login"
            element={!authUser ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="signUp"
            element={!authUser ? <SignUp /> : <Navigate to="/" />}
          />
        </Route>

        {/* RootLayout */}

        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="logout" element={<Logout />} />
          <Route
            path="settings"
            element={authUser ? <Settings /> : <Navigate to="/login" />}
          />
          <Route
            path="profile"
            element={authUser ? <Profile /> : <Navigate to="/login" />}
          />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
