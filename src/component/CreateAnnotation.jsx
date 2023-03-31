import MarkDownWithHighlight from "./MarkdownWithHighlight";
import { highlightTextInMarkdown } from "../utils/highlight-text-in-markdown";
import shortid from "shortid";
import {
  Switch,
  Input,
  Box,
  Button,
  CardHeader,
  CardBody,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Card,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { addAnnotations } from "../firebase-config";

const CreateAnnotation = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Hooks for opening/closing drawer
  const [isAnnotationEnabled, setIsAnnotationEnabled] = useState(false); // State to enable/disable annotations
  const [selectedTextArray, setSelectedTextArray] = useState([]); // State to keep track of selected text
  const [isTextSelected, setIsTextSelected] = useState(false); // State to control text selection
  const [annotation, setAnnotation] = useState(""); // State for annotation text
  const [thisPostAnnotations, setThisPostAnnotations] = useState([]);
  const [markdownWithHighlights, setMarkdownWithHighlights] = useState(
    props.source || ""
  ); // State for markdown with highlights

  useEffect(() => {
    const userAnotations = props.user.annotations;
    if (!userAnotations) return;

    const thisPostAnotationsRef = userAnotations.filter((annotation) => {
      return annotation.postId == props.post.id;
    });
    setThisPostAnnotations(thisPostAnotationsRef);
    thisPostAnotationsRef.map((annotation) =>
      setSelectedTextArray([
        ...selectedTextArray,
        ...annotation.selectedTextArray,
      ])
    );
    console.log(selectedTextArray);
    updateMarkdown(markdownWithHighlights);
  }, []);

  useEffect(() => {
    updateMarkdown(markdownWithHighlights, selectedTextArray);
  }, [selectedTextArray]);

  const cleanSelection = () => {
    // Function to clear text selection

    setIsTextSelected(false);
    setMarkdownWithHighlights(props.source);
    onClose();
  };

  const saveAnnotation = async () => {
    // Function to save annotation

    updateMarkdown(props.source, selectedTextArray);
    const myAnnotation = {
      postId: props.post.id,
      selectedTextArray,
      annotation,
    };

    //send to server
    await addAnnotations(props.user.id, myAnnotation);
    setIsTextSelected(false);
    onClose();
  };
  async function updateMarkdown(markdown, array) {
    const newMarkdown = await highlightTextInMarkdown(markdown, array);
    setMarkdownWithHighlights(newMarkdown);
  }
  const handleSelection = (event) => {
    // Function to handle text selection
    if (!isAnnotationEnabled || isTextSelected) return;

    const selection = window.getSelection().toString();

    if (!selection) return;

    setIsTextSelected(true);
    setSelectedTextArray([...selectedTextArray, selection]);

    onOpen();
  };

  const handleInputChange = (e) => {
    // Function to handle input change for annotation
    setAnnotation(e.target.value);
  };

  return (
    <>
      <Card margin="auto" padding="10px">
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="annotationsActive" mb="0">
            Do you want to enable the annotations feature?
          </FormLabel>
          <Switch
            id="annotationsActive"
            onChange={(e) => setIsAnnotationEnabled(e.target.checked)}
            colorScheme="teal"
            size="lg"
          />
          <Button onClick={onOpen}>View Annotations</Button>
        </FormControl>
      </Card>
      <Box onMouseUp={handleSelection}>
        <MarkDownWithHighlight source={markdownWithHighlights} />
        {/* Component to render markdown with highlights */}
      </Box>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        {/* Drawer component to show annotation input */}
        <DrawerOverlay />
        <DrawerContent>
          {" "}
          <DrawerCloseButton />
          <DrawerHeader>Make your annotation</DrawerHeader>
          <DrawerBody>
            <Card>
              <CardHeader>
                <Heading size="md">Annotations:</Heading>
              </CardHeader>
              <CardBody>
                {thisPostAnnotations.map((annotation) => (
                  <Card key={shortid.generate()} padding={"4px"}>
                    <Heading size="sm">Title:</Heading>
                    <Text> {annotation.annotation}</Text>

                    <Heading size="sm">Note:</Heading>
                    <Text> {...annotation.selectedTextArray}</Text>
                  </Card>
                ))}
              </CardBody>
            </Card>
            <Input
              onChange={handleInputChange}
              value={annotation}
              placeholder="Type here..."
            />
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={cleanSelection}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={saveAnnotation}>
              Save
            </Button>
          </DrawerFooter>{" "}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CreateAnnotation;
