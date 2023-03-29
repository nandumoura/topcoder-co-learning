import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  useToast,
  ModalHeader,
  useDisclosure,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@chakra-ui/react";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import MDEditor from "@uiw/react-md-editor";
import { useParams } from "react-router-dom";
import { addComment } from "../firebase-config";

function CommentModal(props) {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  async function handleModalSubmit() {
    // put the logic here
    console.log(props.post_id, props.user.id, content);
    const comment = await addComment(id, props.post_id, props.user.id, content);
    if (comment.id) {
      toast({
        isClosable: true,
        title: "Comment Created",
        description: "comment created successfully",
        status: "success",
      });
    } else {
      toast({
        description: "An error occurred, please try again later.",
        status: "error",
        isClosable: true,
      });
    }
    setContent("");
    onClose();
  }
  return (
    <>
      <Button colorScheme="teal" variant="outline" top={-10} onClick={onOpen}>
        <QuestionAnswerIcon />
        Leave a comment
      </Button>

      <Modal isOpen={isOpen} size={"xl"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>
          <MDEditor
            style={{ background: "white", color: "black" }}
            value={content}
            onChange={setContent}
          />
          <ModalFooter>
            <Button onClick={handleModalSubmit} colorScheme="teal" mr={3}>
              Send
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CommentModal;
