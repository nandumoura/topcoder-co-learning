import { Box, Flex, Spacer, Text, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  return (
    <Flex alignItems="center" backgroundColor="gray.200" p={4}>
      <Box>
        {props.isLoading ? (
          <Spinner emptyColor="teal.300" color="teal.600" />
        ) : (
          <Text as={Link} to="/" fontWeight="bold" fontSize="xl">
            Learning space App
          </Text>
        )}
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

export default NavbarComponent;
