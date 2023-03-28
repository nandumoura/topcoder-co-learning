import {
  Box,
  Text,
  Heading,
  Stack,
  StackDivider,
  Card,
  CardBody,
} from "@chakra-ui/react";

const ShowPost = (props) => {
  return (
    <Card border="4px" padding={8} margin={6} borderColor={"teal.400"}>
      <Heading>{props.title}</Heading>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Text>{props.content}</Text>
          <Text>{props.created_at}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ShowPost;
