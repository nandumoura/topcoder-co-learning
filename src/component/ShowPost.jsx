import React, { useRef } from "react";
import {
  Box,
  Text,
  Heading,
  Stack,
  StackDivider,
  Card,
  CardBody,
  Button,
} from "@chakra-ui/react";
import { useReactToPrint } from "react-to-print";

import MDEditor from "@uiw/react-md-editor";

const ShowPost = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Box>
      <Card
        key={props.id}
        ref={componentRef}
        border="4px"
        padding={8}
        margin={6}
        borderColor={"teal.400"}
      >
        <Heading>{props.title}</Heading>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <MDEditor.Markdown
              source={props.content}
              style={{
                whiteSpace: "pre-wrap",
                background: "white",
                color: "black",
              }}
            />
            <Text>{props.created_at}</Text>
          </Stack>{" "}
        </CardBody>
      </Card>{" "}
      <Button margin={5} top={-10} onClick={handlePrint}>
        Print this post in PDF
      </Button>
    </Box>
  );
};

export default ShowPost;
