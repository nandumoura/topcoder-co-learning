import React, { useState, useEffect } from "react";

import {
  Card,
  Image,
  CardBody,
  Stack,
  Box,
  Heading,
  CardFooter,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";

const SpaceScreen = (props) => {
  return (
    <Box>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />
        <Stack>
          <CardBody>
            <Heading size="md">{props?.title}</Heading>

            <Text py="2">{props?.description}</Text>
            <Heading size="sm">Prerequisites list:</Heading>
            <Text py="2">{props?.prerequisites}</Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Join this SpaceScreen
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Box>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Heading size="md">Posts </Heading>
        </Card>
      </Box>
    </Box>
  );
};

export default SpaceScreen;
