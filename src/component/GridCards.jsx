import data from "../utils/data";

import { Box, Heading, Grid } from "@chakra-ui/react";
// my componentes
import CourseCard from "./CourseCard";

const GridCards = () => {
  return (
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
              imgSrc={node.node.courseImage.gatsbyImageData.images.fallback.src}
              courseUrl={node.node.courseUrl}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default GridCards;
