import React, { useState, useEffect } from "react";

import { getAllLearningSpaces } from "../firebase-config";
import { Box, Heading, Grid } from "@chakra-ui/react";
// my componentes
import CourseCard from "./CourseCard";

const GridCards = () => {
  const [learningSpaces, setLearningSpaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function testGetAllLearningSpaces() {
    const learningSpaces = await getAllLearningSpaces([]);
    console.log(learningSpaces[0].updated_at);
    setLearningSpaces(learningSpaces);
    setIsLoading(false);
  }

  useEffect(() => {
    testGetAllLearningSpaces();
  }, []);
  if (isLoading) {
    return <>Loading</>;
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
          console.log(space);
          return (
            <CourseCard
              key={space.id}
              name={space.name}
              updatedAt={formatData(space.updated_at)}
              imgSrc={space.thumbnail}
              courseUrl={"/"}
              people={space?.users?.length}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default GridCards;
