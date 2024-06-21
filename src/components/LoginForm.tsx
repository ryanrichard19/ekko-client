// src/components/LoginForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
  useToast
} from '@chakra-ui/react';
import authService from '../services/authService';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await authService.login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
      toast({
        title: 'Login failed.',
        description: 'Please check your credentials and try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="8" p="4" bg="white" shadow="md" rounded="lg">
      <Heading as="h1" size="lg" textAlign="center" mb="6">Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="password" mb="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg" width="full">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
