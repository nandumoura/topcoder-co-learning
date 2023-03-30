import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { updateUpvotesAndDownvotes } from "../firebase-config";

const ShowUpDownVotes = (props) => {
  const { upvotes, downvotes, user } = props;
  const [localUpvotes, setLocalUpvotes] = useState([...upvotes]);
  const [localDownvotes, setLocalDownvotes] = useState([...downvotes]);
  const upDownVotes = localUpvotes.length - localDownvotes.length;
  const [initialized, setInitialized] = useState(false);

  const colorUpDown = upDownVotes >= 0 ? "teal.300" : "red.300";
  const handleUpDownvote = async (upOrDown) => {
    // Verifica qual botão foi clicado e se o usuário já votou na postagem
    if (!localUpvotes.includes(user.id) && !localDownvotes.includes(user.id)) {
      // Usuário ainda não votou
      if (upOrDown === "up") {
        setLocalUpvotes((prevUpvotes) => [...prevUpvotes, user.id]);
      } else {
        setLocalDownvotes((prevDownvotes) => [...prevDownvotes, user.id]);
      }
    } else if (upOrDown === "up") {
      // Usuário já votou positivamente
      if (localUpvotes.includes(user.id)) {
        setLocalUpvotes((prevUpvotes) =>
          prevUpvotes.filter((id) => id !== user.id)
        );
      } else {
        // Usuário votou negativamente, atualiza o voto
        setLocalDownvotes((prevDownvotes) =>
          prevDownvotes.filter((id) => id !== user.id)
        );
        setLocalUpvotes((prevUpvotes) => [...prevUpvotes, user.id]);
      }
    } else {
      // Usuário já votou negativamente
      if (localDownvotes.includes(user.id)) {
        setLocalDownvotes((prevDownvotes) =>
          prevDownvotes.filter((id) => id !== user.id)
        );
      } else {
        // Usuário votou positivamente, atualiza o voto
        setLocalUpvotes((prevUpvotes) =>
          prevUpvotes.filter((id) => id !== user.id)
        );
        setLocalDownvotes((prevDownvotes) => [...prevDownvotes, user.id]);
      }
    }
  };
  useEffect(() => {
    if (initialized) {
      // Verifica se já foi inicializado
      const updateVotes = async () => {
        await updateUpvotesAndDownvotes(
          props.learningSpace_id,
          props.post.id,
          localUpvotes,
          localDownvotes
        );
      };

      updateVotes();
    } else {
      setInitialized(true); // Define o estado inicial como true
    }
  }, [localUpvotes, localDownvotes]);
  return (
    <Box
      color={colorUpDown}
      display={"flex"}
      flexDirection="column"
      alignItems="center"
    >
      <TriangleUpIcon onClick={() => handleUpDownvote("up")} color="teal.300" />
      {upDownVotes}
      <TriangleDownIcon
        onClick={() => handleUpDownvote("down")}
        color="red.300"
      />
    </Box>
  );
};

export default ShowUpDownVotes;
