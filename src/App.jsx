import data from "./utils/data";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "./AuthContext";
import {
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  Grid,
  Link,
  Stack,
  GridItem,
  StackDivider,
} from "@chakra-ui/react";
import CourseCard from "./component/CourseCard";

function App() {
  const currentUser = useAuthValue() || {};
  let navigate = useNavigate();
  console.log(data[0].node.courseImage.gatsbyImageData.images.fallback.src);
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
            {currentUser.email ? (
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
      <Box display="grid" gridGap={2} gridAutoFlow="row dense">
        <Heading size="md" textAlign={"center"}>
          {" "}
          Co-learning Spaces section
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} padding={4}>
          {data.map((node) => {
            return (
              <CourseCard
                key={node.node.youtubePreviewId}
                name={node.node.courseTitle}
                updatedAt={node.node.createdAt}
                imgSrc={
                  node.node.courseImage.gatsbyImageData.images.fallback.src
                }
                courseUrl={node.node.courseUrl}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
