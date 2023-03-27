import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
  FormLabel,
  Textarea,
  Stack,
  Input,
  InputGroup,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import { addPost } from "../firebase-config";

const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const newPost = await addPost(
      props.learningSpaceId,
      props.userId,
      title,
      content
    );
    setContent("");
    setTitle("");
    setIsSubmitting(false);
    onClose();
    onPostCreation(newPost);
  }
  return (
    <>
      <Button
        margin={5}
        leftIcon={<AddIcon />}
        colorScheme="teal"
        onClick={onOpen}
      >
        Create new post
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        size="xl"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Create a new post</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  ref={firstField}
                  id="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Please enter title"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="content">Content</FormLabel>
                <InputGroup>
                  <Textarea
                    type="text"
                    id="content"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    placeholder="Please enter content"
                    height={400}
                  />
                </InputGroup>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              colorScheme="blue"
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CreatePost;
