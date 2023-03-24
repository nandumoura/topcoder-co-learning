import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // se estiver usando React Router
import { useAuthValue } from "../AuthContext";
const Navbar = () => {
  const currentUser = useAuthValue();

  return (
    <Flex alignItems="center" backgroundColor="gray.200" p={4}>
      <Box>
        <Text fontWeight="bold" fontSize="xl">
          My App
        </Text>
      </Box>
      <Spacer />
      <Box>
        <Flex alignItems="center">
          <Box pr={4}>
            <Link to="/profile">
              <Text>Profile</Text>
            </Link>
          </Box>
          <Box>
            <Link to="/create-learning-space">
              <Text>Create Learning Space</Text>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
