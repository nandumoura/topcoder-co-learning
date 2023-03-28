import {
  Card,
  Text,
  CardBody,
  Heading,
  CardFooter,
  ButtonGroup,
  Divider,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";
function CourseCard(props) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={props.imgSrc}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.name}</Heading>
          <Text display="flex" color="teal.400" fontSize="2xl">
            {props.people}
          </Text>
          <Text pl="8px" color="teal.500" fontSize="md">
            people enrolled in this course
          </Text>
          <Text color="gray.500" fontSize="sm">
            Last update: {props.updatedAt}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            as={Link}
            to={props.courseUrl}
            variant="solid"
            colorScheme="blue"
          >
            Show more!
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
