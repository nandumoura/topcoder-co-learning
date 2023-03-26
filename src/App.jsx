import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase-config";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage user={user} />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/login",
      element: <AuthPage user={user} />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/home",
      element: <HomePage user={user} />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/create-learning-space",
      element: <Profile user={user} />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/profile",
      element: <Profile user={user} />,
      errorElement: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
