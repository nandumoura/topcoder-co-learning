import {
  Box,
  Text,
  ButtonGroup,
  Button,
  Stat,
  Heading,
  StatHelpText,
  StatLabel,
  Stack,
  StackDivider,
  StatNumber,
  Card,
  CardBody,
  Image,
  space,
} from "@chakra-ui/react";

const ShowPost = (props) => {
  return (
    <Card border="4px" padding={8} margin={6} borderColor={"teal.400"}>
      <CardBody>
        <Heading>{props.title}</Heading>
        <Stack divider={<StackDivider />} spacing="4">
          <Text>{props.content}</Text>
          <Text>{props.created_at}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ShowPost;
