import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Navbar from "./component/Navbar";

function App() {
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
  );
}

export default App;
