import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { getAllLearningSpaces } from "../firebase-config";
import { Box, Heading, Grid, Spinner } from "@chakra-ui/react";
// my componentes
import CourseCard from "./CourseCard";

export async function testGetAllLearningSpaces() {
  const dataFromFirebase = await getAllLearningSpaces();

  return dataFromFirebase;
}
const GridCards = () => {
  const [learningSpaces, setLearningSpaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    testGetAllLearningSpaces().then((response) => {
      setLearningSpaces(response);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return (
      <Spinner
        thickness="8px"
        speed="0.85s"
        emptyColor="teal.300"
        color="teal.600"
        size="xl"
      />
    );
  }
  function formatData(obj) {
    const updatedAt = new Date(obj.seconds * 1000);
    const formattedDate = `${updatedAt.toLocaleDateString()} ${updatedAt.toLocaleTimeString()}`;
    return formattedDate;
  }
  return (
    <Box display="grid" gridGap={2} gridAutoFlow="row dense">
      <Heading size="md" textAlign={"center"}>
        Co-learning Spaces section
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} padding={4}>
        {learningSpaces.map((space) => {
          return (
            <CourseCard
              key={space.id}
              name={space.name}
              updatedAt={formatData(space.updated_at)}
              imgSrc={space.thumbnail}
              courseUrl={`learning-spaces/${space.id}`}
              people={space?.users?.length}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default GridCards;
