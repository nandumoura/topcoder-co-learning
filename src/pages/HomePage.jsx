import {
  Box,
  Card,
  CardHeader,
  Heading,
  Link,
  CardBody,
  Text,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// my componentes
import SpaceScreen from "../component/SpaceScreen";
import GridCards from "../component/GridCards";

function App(props) {
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const isPageInitial = true;

  function handleJoinLeaveSpaceBtn() {
    if (!user.email) {
      navigate("/login");
      return;
    }
  }
  const isUserLoggedIn = user.email;
  return (
    <Box
      borderRadius="md"
      border="4px"
      borderColor="teal.300"
      margin={100}
      display="row"
      alignItems="center"
      justifyContent="space-between"
      maxW="960px"
      mx="auto"
    >
      <Card>
        <CardHeader>
          <Heading size="md">Home</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4"></Stack>
          <Box>
            <Heading onClick={handleJoinLeaveSpaceBtn} textAlign="center">
              {isUserLoggedIn
                ? "Join a learning space below"
                : "Sign up to start learning Click here"}
            </Heading>
          </Box>
        </CardBody>
      </Card>
      {isPageInitial ? <GridCards /> : <SpaceScreen />}
    </Box>
  );
}

export default App;
