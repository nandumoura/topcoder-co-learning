// Creating a Learning Space

//-[x] An authenticated user should be able to create
// a new learning space from the Navbar menu title Create Space

// -[x]A new space creation screen should be rendered.

// -[x] The screen should have a form with the following
//  fields: Title, description, prerequisites (ReactJS tags), thumbnail.

// todo se der tempo fazer a submissão de imagens

//libs
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
// system functions
import { addLearningSpace } from "../firebase-config";
// components
import NavBarComponent from "../component/NavbarComponent";

const CreateLearningSpace = () => {
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    keywords: "",
    prerequisites: "",
    thumbnail: "",
    ActiveUsers: [],
    Users: [],
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para o servidor
    formData.keywords = formData.keywords.split(" ");
    const docCreated = await addLearningSpace(formData);
    console.log(formData);
    setTimeout(() => {
      navigate("/learning-spaces/" + docCreated.id);
    }, 500);
  };
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
      <NavBarComponent />
      <Box padding="25px">
        <form onSubmit={handleSubmit}>
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="prerequisites" isRequired>
            <FormLabel>Prerequisites</FormLabel>
            <Input
              type="text"
              name="prerequisites"
              value={formData.prerequisites}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="keywords" isRequired>
            <FormLabel>Keywords use spaces to separate them</FormLabel>
            <Input
              type="text"
              name="keywords"
              value={formData.keywords}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="thumbnail" isRequired>
            <FormLabel>Thumbnail</FormLabel>
            <Input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleInputChange}
            />
          </FormControl>

          <Button mt={4} colorScheme="teal" type="submit">
            Enviar
          </Button>
        </form>
      </Box>
    </Box>
  );
};
export default CreateLearningSpace;
