import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SignInForm from "../component/SignInForm";
import LoginForm from "../component/LoginForm";

function UnloggedPage() {
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
      <Tabs isFitted>
        <TabList>
          <Tab _selected={{ color: "white", bg: "teal.400" }}>Sign</Tab>
          <Tab _selected={{ color: "white", bg: "teal.400" }}>Login</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SignInForm />
          </TabPanel>
          <TabPanel>
            <LoginForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default UnloggedPage;
