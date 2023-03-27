import { Box, Stack, Skeleton, Spinner } from "@chakra-ui/react";
import NavbarComponent from "../component/NavbarComponent";
const PageLoading = (props) => {
  return (
    <Box
      borderRadius="md"
      border="4px"
      borderColor="teal.300"
      sx={props.isFullPage ? { margin: "100px", maxWidth: "90%" } : {}}
      display="row"
      alignItems="center"
      justifyContent="space-between"
      mx="auto"
    >
      {props.withoutNavBar ? "" : <NavbarComponent isLoading={true} />}

      <Stack>
        <Skeleton height="20px" /> <Skeleton height="20px" />
        <Skeleton height="20px" /> <Skeleton height="20px" />
        <Skeleton height="20px" /> <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" /> <Skeleton height="20px" />{" "}
        <Skeleton height="20px" />
        <Skeleton height="20px" /> <Skeleton height="20px" />
        <Skeleton height="20px" /> <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </Box>
  );
};

export default PageLoading;
