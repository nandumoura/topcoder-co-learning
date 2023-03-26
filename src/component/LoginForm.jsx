import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
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

const authenticateUser = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("Auth Token", response._tokenResponse.refreshToken);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

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

    const result = await authenticateUser(email, password);

    if (result.success) {
      navigate("/home");
    } else {
      setTypeError(result.message);
      setShowError(true);
    }

    setIsSubmitting(false);
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
