import { Button, Center, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Center minHeight="100vh">
      <Heading fontSize="6xl" textAlign="center" mb={8}>
        Oops! Page Not Found
      </Heading>
      <Text fontSize="2xl" textAlign="center" mb={8}>
        It looks like you've wandered off the beaten path.
      </Text>
      <Button as={Link} to="/ " size="lg">
        Take Me Home
      </Button>
    </Center>
  );
};

export default PageNotFound;
