import {
  Drawer,
  DrawerBody,
  Button,
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
import ShowUpDownVotes from "./ShowUpDownVotes";

const ViewComments = (props) => {
  const [comments, setComments] = useState([]);
  const getData = async () => {
    const data = await getComment(props.learningSpace_id, props.post.id);
    setComments(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button margin={5} top={-10} onClick={() => onOpen()} m={4}>
        View Comments
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Comments <Button onClick={getData}>Refresh</Button>
          </DrawerHeader>{" "}
          <DrawerBody>
            {comments.map((comment) => {
              return (
                <Card key={comment.id}>
                  <CardHeader display="flex">
                    <ShowUpDownVotes
                      is_a_comment={true}
                      learningSpace_id={props.learningSpace_id}
                      user={props.user}
                      comment={comment}
                      post={props.post}
                      upvotes={comment.upvotes}
                      downvotes={comment.downvotes}
                    />
                    <Badge
                      variant="outline"
                      colorScheme="green"
                      margin={"auto 18px"}
                    >
                      {comment.userName}{" "}
                    </Badge>{" "}
                    says:
                  </CardHeader>
                  <CardBody>
                    {" "}
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
