import { Box, Divider, Flex, Avatar, Badge, Text } from "@chakra-ui/react";
import Navbar from "../component/Navbar";
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../AuthContext";
function Profile() {
  const currentUser = useAuthValue() || {};

  let name = localStorage.getItem("name");
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = localStorage.getItem("Auth Token");
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
      padding={5}
    >
      <Navbar />
      <Box fontSize="md" fontWeight="bold">
        Name:
      </Box>
      <Divider padding={2} />
      <Flex>
        <Avatar src="https://bit.ly/sage-adebayo" />
        <Box ml="3">
          <Text fontWeight="bold">
            {name}

            <Badge ml="1" colorScheme="green">
              New
            </Badge>
          </Text>
          <Text fontSize="sm">UI Engineer</Text>
        </Box>
      </Flex>
      <Divider padding={2} />
      <Flex>
        <Box ml="3">
          <Text fontWeight="bold">Biography:</Text>
          <Text fontSize="sm">UI Engineer</Text>
        </Box>
      </Flex>
      <Divider padding={2} />
      <Flex>
        <Box ml="3">
          <Text fontWeight="bold">Country:</Text>
          <Text fontSize="sm">India</Text>
        </Box>
      </Flex>
      <Divider padding={2} />
      <Flex>
        <Box ml="3">
          <Text fontWeight="bold">Interests:</Text>
          <Text fontSize="sm">ReactJS, Chakra UI, Tailwind, topcoder</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Profile;
