import React, { useRef, useState, useEffect } from "react";
import PrintIcon from "@mui/icons-material/Print";

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
import { formatDateFirebase } from "../utils/format-data";
import MDEditor from "@uiw/react-md-editor";
import CommentModal from "./CommentModal";
import ShowUpDownVotes from "./ShowUpDownVotes";

const ShowPost = (props) => {
  const {
    title,
    content,
    created_at,
    id: post_id,
    upvotes,
    downvotes,
  } = props.post;

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
        <Box display="flex" flexDirection="row">
          <ShowUpDownVotes
            learningSpace_id={props.learningSpace_id}
            user={props.user}
            post={props.post}
            upvotes={upvotes}
            downvotes={downvotes}
          />
          <Heading alignSelf="center" marginLeft="10px">
            {title}
          </Heading>
        </Box>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <MDEditor.Markdown
              source={content}
              style={{
                whiteSpace: "pre-wrap",
                background: "white",
                color: "black",
              }}
            />
            <Text>{formatDateFirebase(created_at)}</Text>
          </Stack>{" "}
        </CardBody>
      </Card>{" "}
      <Button colorScheme="teal" margin={5} top={-10} onClick={handlePrint}>
        <PrintIcon /> Print this post in PDF
      </Button>
      <CommentModal post_id={props.post_id} user={props.user} />
    </Box>
  );
};

export default ShowPost;
