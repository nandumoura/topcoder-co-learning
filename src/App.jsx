import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./redux/userSlice";

import AuthPage from "./pages/AuthPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase-config";
import LearningSpace from "./pages/LearningSpace";

function App() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(
        add({
          email: user.email,
          id: user.uid,
          metadata: user.metadata,
        })
      );
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
      path: "learning-spaces/:id",
      element: <LearningSpace user={user} />,
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
      children: [
        {
          path: "/profile/:id",
          element: <Profile user={user} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
