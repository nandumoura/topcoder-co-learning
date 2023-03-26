import {
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  Link,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
// my componentes
import SpaceScreen from "../component/SpaceScreen";
import GridCards from "../component/GridCards";

function App(props) {
  const isPageInitial = true;

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
            {props?.user?.email ? (
              <Text pt="2" fontSize="sm">
                Join a learning space below
              </Text>
            ) : (
              <Text pt="2" fontSize="sm">
                Sign up to start learning{" "}
                <Link color="teal.500" href="/login">
                  click here to login
                </Link>
              </Text>
            )}
          </Box>
        </CardBody>
      </Card>
      {isPageInitial ? <GridCards /> : <SpaceScreen />}
    </Box>
  );
}

export default App;
