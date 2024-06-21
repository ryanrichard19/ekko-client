import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Flex, Button, Text } from '@chakra-ui/react';

const MenuBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Box bg="teal.500" px="4" py="2">
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" color="white">My App</Text>
        <Flex>
          <Button as={Link} to="/" variant="ghost" colorScheme="teal" mr="4">
            Home
          </Button>
          <Button as={Link} to="/users" colorScheme="teal" variant="ghost" mr="2">
            Users
          </Button>
          <Button as={Link} to="/roles" colorScheme="teal" variant="ghost" mr="2">
            Roles
          </Button>
          <Button colorScheme="teal" variant="ghost" onClick={handleLogout}>
            Logout
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MenuBar;
