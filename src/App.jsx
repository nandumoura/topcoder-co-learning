import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase-config";
import LearningSpace from "./pages/LearningSpace";

import { testGetAllLearningSpaces as learningSpacesLoader } from "./component/GridCards";
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
      loader: learningSpacesLoader,
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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage user={user} />,
//     errorElement: <PageNotFound />,
//     children: [
//       {
//         path: "/login",
//         element: <AuthPage user={user} />,
//       },
//       { path: "/home", element: <HomePage user={user} /> },
//       { path: "/create-learning-space", element: <Profile user={user} /> },
//       {
//         path: "/learning-spaces",
//         element: <LearningSpace user={user} />,
//         children: [
//           {
//             path: "/learning-spaces/:id",
//             element: <LearningSpace user={user} />,
//           },
//         ],
//       },
//       {
//         path: "/profile",
//         element: <Profile user={user} />,
//         errorElement: <PageNotFound />,
//         children: [
//           {
//             path: "/profile/:id",
//             element: <Profile user={user} />,
//           },
//         ],
//       },
//     ],
//   },
// ]);
