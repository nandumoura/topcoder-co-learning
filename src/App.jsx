import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

import { Box } from "@chakra-ui/react";
import Navbar from "./component/Navbar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = localStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/home");
    }
    if (!authToken) {
      navigate("/");
    }
  }, []);
  return (
    <AuthProvider value={{ currentUser }}>
      <Box
        borderRadius="md"
        border="4px"
        borderColor="teal.300"
        margin={100}
        display="row"
        alignItems="center"
        justifyContent="space-between"
        maxW="560px"
        mx="auto"
      >
        <Navbar />
      </Box>
    </AuthProvider>
  );
}

export default App;
