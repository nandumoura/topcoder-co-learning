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
  Link,
  Button,
} from "@chakra-ui/react";
import formatDate from "../utils/format-data";

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
            250{" "}
            <Text pl="8px" color="teal.500" fontSize="md">
              people enrolled in this course
            </Text>{" "}
          </Text>{" "}
          <Text color="gray.500" fontSize="sm">
            Last update: {formatDate(props.updatedAt)}
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
            Start this course!
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
