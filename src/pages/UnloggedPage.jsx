import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import RegisterForm from "../component/RegisterForm";
import LoginForm from "../component/LoginForm";
import { useAuthValue } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function UnloggedPage() {
  let navigate = useNavigate();
  const currentUser = useAuthValue() || {};
  currentUser.email ? navigate("/") : "";
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
            <RegisterForm />
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
