import {
  Box,
  Text,
  ButtonGroup,
  Button,
  Stat,
  Stack,
  Badge,
  Heading,
  StatHelpText,
  StatLabel,
  StatNumber,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getLearningSpaceById,
  addUserToALearningSpace,
  addActiveUsersToALearningSpace,
  removeUserToALearningSpace,
  getPosts,
} from "../firebase-config";
import PageLoading from "./PageLoading";
import NavbarComponent from "../component/NavbarComponent";
import ShowPost from "../component/ShowPost";
import { formatDateFirebase } from "../utils/format-data";
import CreatePost from "../component/CreatePost";
import RelatedLearningSpaces from "../component/RelatedLearningSpaces";

// [x] - When clicked on any co-learning card from the homepage, the app should render that co-learning space screen.
// [x]- A learning space shall display an overview of the learning space.
// [x]- A learning space shall display a button to join/leave a learning space near its title. If the user is not authenticated, it should display Sign up to Join otherwise Join
// [x]- A learning space shall display a prerequisites list, demonstrating the learning requirements for the learning space. We will cover how this list will appear in the HARD challenge.
// [x]- A learning space shall display a list of Posts created inside the learning space in a sorted order by date.
// [X]- A learning space shall display a button to create a Post.
// [x]- A learning space shall display a list of active users that are currently visiting the learning space. Clicking on one of the users will reroute to their profile page.
// [x]- A learning space shall display a list of related learning spaces, which are determined by the keywords used during the creation of learning spaces. We will cover how the keywords are listed in the HARD challenge.

function LearningSpace() {
  const { id } = useParams();
  const user = useSelector((state) => state.user.value);
  const [learningSpace, setLearningSpace] = useState(null);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchLearningSpace() {
      const space = await getLearningSpaceById(id);
      space.posts = await getPosts(id);

      const userIsActive = await learningSpace?.ActiveUsers.filter(
        (activeUsers) => activeUsers.id == user.id
      );

      if (userIsActive?.length > 0 || userIsActive == undefined) {
        await addActiveUsersToALearningSpace(id, user.name, user.id);
      }
      console.log(space);
      setPosts(space.posts);
      setLearningSpace(space);
    }

    fetchLearningSpace();
  }, [id, user]);

  function handleJoinLeaveSpaceBtn() {
    if (!user.email) {
      navigate("/login");
      return;
    }

    const isUserLoggedIn = user.email;
    const isUserInSpace =
      isUserLoggedIn && learningSpace.Users?.includes(user.id);

    if (isUserInSpace) {
      removeUserToALearningSpace(id, user.id);
      setLearningSpace((prevState) => {
        const updatedUsers = prevState?.Users.filter((id) => id !== user.id);
        return { ...prevState, Users: updatedUsers };
      });
    } else {
      addUserToALearningSpace(id, user.id);
      setLearningSpace((prevState) => {
        const updatedUsers = [...prevState?.Users, user.id];
        return { ...prevState, Users: updatedUsers };
      });
    }
  }

  async function handlePostCreation() {
    const posts = await getPosts(id);
    console.log(posts);
    setPosts(posts);
  }
  if (!learningSpace) {
    return <PageLoading isFullPage={true} />;
  }
  const isUserLoggedIn = user.email;
  const isUserInSpace =
    isUserLoggedIn && learningSpace.Users?.includes(user.id);
  let buttonText;
  if (!isUserLoggedIn) {
    buttonText = "Sign up to start learning";
  } else if (isUserInSpace) {
    buttonText = "Leave a learning space";
  } else {
    buttonText = "Join a learning space";
  }
  return (
    <Box
      borderRadius="md"
      border="4px"
      borderColor="teal.300"
      margin={100}
      display="row"
      alignItems="center"
      justifyContent="space-between"
      maxW="90%"
      mx="auto"
    >
      <NavbarComponent isLoading={false} />

      <Image
        src={learningSpace.thumbnail}
        alt={learningSpace.title}
        width="100%"
      />

      <Heading padding={5}>{learningSpace.title}</Heading>

      <ButtonGroup padding={5}>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={handleJoinLeaveSpaceBtn}
        >
          {buttonText}
        </Button>
      </ButtonGroup>
      <Box>
        <Text padding={5}>{learningSpace.overview}</Text>
        <Text padding={5}>{learningSpace.prerequisites}</Text>
      </Box>

      <Stat padding={5}>
        <StatLabel>Users in this learning space:</StatLabel>
        <StatNumber>{learningSpace.Users?.length}</StatNumber>
        <StatHelpText>
          Last update: {formatDateFirebase(learningSpace.updated_at)}
        </StatHelpText>
      </Stat>
      <Stack margin={5} direction="row">
        <Box>
          <Text>Active users:</Text>
          {learningSpace?.ActiveUsers?.map((user) => {
            return (
              <Badge
                key={user.id}
                margin={2}
                as={Link}
                to={"/profile/" + user.id}
                colorScheme="green"
                _hover={{
                  background: "teal.300",
                  color: "white",
                }}
              >
                {user.name}
              </Badge>
            );
          })}
        </Box>
      </Stack>
      <RelatedLearningSpaces keywords={learningSpace.keywords} />
      <Box>
        {posts.map((post) => {
          return (
            <ShowPost
              key={post.id}
              learningSpace_id={id}
              post={post}
              user={user}
            />
          );
        })}
      </Box>
      {user?.id ? (
        <CreatePost
          learningSpaceId={id}
          userId={user.id}
          onPostCreation={handlePostCreation}
        />
      ) : (
        <></>
      )}
    </Box>
  );
}

export default LearningSpace;
