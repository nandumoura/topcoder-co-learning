import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseApp } from "../firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [typeError, setTypeError] = useState("an unexpected error occurred");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    const authentication = getAuth(firebaseApp);
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
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
          Login
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
