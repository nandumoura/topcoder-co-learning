import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

// components
import App from "./App";
import { AuthProvider } from "./AuthContext";
import UnloggedPage from "./pages/UnloggedPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import LearningSpace from "./pages/LearningSpace";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/login",
    element: <UnloggedPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/home",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/create-learning-space",
    element: <LearningSpace />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <PageNotFound />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
