import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// componentes
import App from "./App";
import UnloggedPage from "./pages/UnloggedPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import LearningSpace from "./pages/LearningSpace";

const router = createBrowserRouter([
  {
    path: "/",
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
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
