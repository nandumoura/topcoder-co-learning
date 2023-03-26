import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Outlet, Link, useLoaderData } from "react-router-dom";
import NavbarComponent from "../component/NavbarComponent";

function LearningSpace() {
  const learningSpaces = useLoaderData();
  console.log(learningSpaces);
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
      <NavbarComponent />
      <Text padding={5}>Learning Space</Text>
      <Text padding={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        doloremque itaque pariatur distinctio voluptatem et illum nihil iusto
        accusantium laboriosam! Nesciunt qui nemo non, officiis harum ut hic
        corrupti! Recusandae? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Officiis porro exercitationem veritatis molestiae odit aut tempora
        assumenda, ea unde nisi quaerat laboriosam magni totam sapiente minima,
        minus eveniet aliquid. Beatae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Tempore, vero quo, quidem velit quos tempora dolorem
        consequuntur cupiditate ratione ex magnam numquam nemo eius quia
        reprehenderit vel odio voluptatem temporibus. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Tenetur ea quod, quia eaque facere
        ducimus in, ad totam ut voluptatum saepe illum suscipit veritatis, eos
        placeat doloremque? Ratione, fugiat minus!Lorem
      </Text>
    </Box>
  );
}

export default LearningSpace;
