import { Box, Divider, Flex, Avatar, Badge, Text } from "@chakra-ui/react";
import NavbarComponent from "../component/NavbarComponent";

function Profile() {
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
      <NavbarComponent />
      <Box fontSize="md" fontWeight="bold">
        Name:
      </Box>
      <Divider padding={2} />
      <Flex>
        <Avatar src="https://bit.ly/sage-adebayo" />
        <Box ml="3">
          <Text fontWeight="bold">
            "todo por nome"
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
