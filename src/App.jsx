import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/login",
      element: <AuthPage />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/home",
      element: <App />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/create-learning-space",
      element: <Profile />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
