import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Box, FormControl, FormLabel, Heading, Text, Badge, useToast, Spinner } from '@chakra-ui/react';
import userService from '../services/userService';
import { User } from '../models/user';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toast = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchUser() {
      if (!id) {
        setError(new Error('User ID is required'));
        setLoading(false);
        return;
      }

      try {
        const userData = await userService.getUser(id);
        setUser(userData);
      } catch (error: any) {
        setError(new Error('Failed to fetch user'));
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  const handleDelete = async () => {
    if (!id) {
      setError(new Error('User ID is required'));
      setLoading(false);
      return;
    }
    try {
      await userService.deleteUser(id);
      toast({
        title: 'User deleted successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      navigate('/users');
    } catch (error) {
      console.error('Failed to delete user', error);
      toast({
        title: 'Failed to delete user.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <Text color="red.500">{error.message}</Text>;
  }

  if (!user) {
    return <Text>No user found</Text>;
  }

  return (
    <Box maxW="md" mx="auto" mt="8" p="4" bg="white" shadow="md" rounded="lg">
      <Heading as="h1" size="lg" textAlign="center" mb="6">
        Details for {user.email}
      </Heading>
      <FormControl id="name" mb="4">
        <FormLabel>Name</FormLabel>
        <Text>{user.name}</Text>
      </FormControl>
      <FormControl id="email" mb="4">
        <FormLabel>Email</FormLabel>
        <Text>{user.email}</Text>
      </FormControl>
      <FormControl id="roles" mb="4">
        <FormLabel>Roles</FormLabel>
        {user.roles.map((role) => (
          <Badge key={role.id} colorScheme="green" mr="1">
            {role.name}
          </Badge>
        ))}
      </FormControl>
      <Button
        colorScheme="blue"
        size="lg"
        width="full"
        mb="4"
        onClick={() => navigate(`/users/${user.id}/edit`)}
      >
        Edit
      </Button>
      <Button colorScheme="red" size="lg" width="full" onClick={handleDelete}>
        Delete
      </Button>
    </Box>
  );
};

export default UserDetail;
