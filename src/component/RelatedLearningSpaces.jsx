import { Card, Wrap, Heading, Badge } from "@chakra-ui/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getLearningSpacesByKeywords } from "../firebase-config";

const RelatedLearningSpaces = (props) => {
  const keywords = props.keywords;
  const [related, setRelated] = useState([]);

  useEffect(() => {
    async function getRelated() {
      const dataFromBd = await getLearningSpacesByKeywords(keywords);
      setRelated(dataFromBd);
    }
    getRelated();
  }, [keywords]);

  return (
    <Card margin={5} padding={5}>
      <Heading size={"md"}>Related Learning Spaces</Heading>
      <Wrap margin={5} spacing={2}>
        {related.map((unit) => {
          return (
            <Badge
              as={Link}
              key={unit.id}
              to={"/learning-spaces/" + unit.id}
              reloadDocument
              relative="path"
              bgColor={"teal.400"}
              color="white"
              padding={2}
            >
              {unit.title}
            </Badge>
          );
        })}
      </Wrap>
    </Card>
  );
};

export default RelatedLearningSpaces;
