// react imports and libs
import React, { useEffect } from "react";
import "./assets/app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { add } from "./redux/userSlice";

// get data functions
import { onAuthStateChanged } from "firebase/auth";
import auth, { getUserByEmail } from "./firebase-config";

// pages
import LearningSpace from "./pages/LearningSpace";
import TestePage from "./pages/TestePage";
import CreateLearningSpace from "./pages/CreateLearningSpace";
import AuthPage from "./pages/AuthPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import MarkDownEditor from "./pages/MarkDownEditor";

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
      element: <CreateLearningSpace user={user} />,
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
    {
      path: "/markdown",
      element: <MarkDownEditor />,
      errorElement: <PageNotFound />,
    },
    { path: "/teste", element: <TestePage />, errorElement: <PageNotFound /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
