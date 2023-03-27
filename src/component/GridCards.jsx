import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/learningSpacesSlice";
import { formatDateFirebase } from "../utils/format-data";
import { getAllLearningSpaces } from "../firebase-config";
import { Box, Heading, Grid, Spinner } from "@chakra-ui/react";
// my componentes
import CourseCard from "./CourseCard";

export async function testGetAllLearningSpaces() {
  const dataFromFirebase = await getAllLearningSpaces();

  return dataFromFirebase;
}
const GridCards = () => {
  const learningSpaces = useSelector((state) => state.learningSpaces.value);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    testGetAllLearningSpaces().then((response) => {
      dispatch(add(response));
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
              updatedAt={formatDateFirebase(space.updated_at)}
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
