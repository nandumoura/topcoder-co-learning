import { useState, useEffect } from "react";
import { Box, Divider, Flex, Avatar, Badge, Text } from "@chakra-ui/react";
import { Outlet, Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavbarComponent from "../component/NavbarComponent";
import { getUserById } from "../firebase-config";
// todo obter dados do usuario

//Name,
//Biography and
//Country of residence,
//interests (ReactJS tags) and a
//placeholder photo thumbnail.

function Profile() {
  const { id } = useParams();
  const user = useSelector((state) => state.user.value);
  const [showUser, setShowUser] = useState({});

  useEffect(() => {
    async function getUser() {
      if (!id) {
        setShowUser(user);
      } else {
        const respUser = await getUserById(id);

        setShowUser(respUser);
      }
    }
    getUser();
  }, [user]);

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
            {showUser?.name}
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
