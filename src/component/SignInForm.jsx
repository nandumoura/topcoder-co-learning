import { useState } from "react";
import { firebaseApp } from "../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [typeError, setTypeError] = useState("an unexpected error occurred");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    const authentication = getAuth(firebaseApp);
    createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        localStorage.setItem("name", name);
        localStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        setIsSubmitting(false);
        navigate("/home");
      })
      .catch((error) => {
        setTypeError(error.message);
        setShowError(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        {showError && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Error</AlertTitle>
            <AlertDescription>{typeError}</AlertDescription>
          </Alert>
        )}
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        <Button type="submit" isLoading={isSubmitting}>
          Sign in
        </Button>
      </Stack>
    </form>
  );
};

export default SignInForm;
