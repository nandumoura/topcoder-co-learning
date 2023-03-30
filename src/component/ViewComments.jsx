import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  Button,
  Text,
  Card,
  CardHeader,
  Badge,
  CardBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { getComment, getUserById } from "../firebase-config";
import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const ViewComments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getComment(props.learningSpace_id, props.post.id);
      setComments(data);
    };
    getData();
  }, []);

  console.log(comments);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };
  return (
    <>
      <Button margin={5} top={-10} onClick={() => onOpen()} m={4}>
        View Comments
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Comments</DrawerHeader>
          <DrawerBody>
            {comments.map((comment) => {
              return (
                <Card key={comment.id}>
                  <CardHeader>
                    <Badge variant="outline" colorScheme="green">
                      {comment.userName}{" "}
                    </Badge>{" "}
                    says:
                  </CardHeader>
                  <CardBody>
                    <MDEditor.Markdown
                      source={comment.content}
                      style={{
                        whiteSpace: "pre-wrap",
                        background: "white",
                        color: "black",
                      }}
                    />
                  </CardBody>
                </Card>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>{" "}
    </>
  );
};

export default ViewComments;
