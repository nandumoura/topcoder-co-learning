import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./redux/userSlice";

import AuthPage from "./pages/AuthPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import { getUserByEmail } from "./firebase-config";
import auth from "./firebase-config";
import LearningSpace from "./pages/LearningSpace";
import TestePage from "./pages/TestePage";
function App() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const getBdUser = await getUserByEmail(user?.email);
      dispatch(
        add({
          email: user.email,
          name: getBdUser.name,
          id: user.uid,
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
      path: "/learning-spaces/:id",
      element: <LearningSpace user={user} />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/login",
      element: <AuthPage user={user} />,
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
    {
      path: "/profile/:id",
      element: <Profile user={user} />,
      errorElement: <PageNotFound />,
    },
    { path: "/teste", element: <TestePage />, errorElement: <PageNotFound /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
