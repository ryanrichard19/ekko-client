import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Box, FormControl, FormLabel } from '@chakra-ui/react';
import Select from 'react-select';
import userService from '../services/userService';
import roleService from '../services/roleService';

const UserCreationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleIds, setRoleIds] = useState<number[]>([]);
  const [roles, setRoles] = useState<{ value: number, label: string }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const roles = await roleService.getRoles();
        const formattedRoles = roles.map(role => ({ value: role.id, label: role.name }));
        setRoles(formattedRoles);
      } catch (error) {
        console.error('Failed to fetch roles', error);
      }
    };

    fetchRoles();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await userService.createUser({ name, email, password, roleIds });
      navigate('/users');
    } catch (error) {
      console.error('Failed to create user', error);
      alert('Failed to create user. Please check your input and try again.');
    }
  };

  const handleRoleChange = (selectedOptions: any) => {
    const ids = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    setRoleIds(ids);
  };

  return (
    <Box maxW="md" mx="auto" mt="8" p="4" bg="white" shadow="md" rounded="lg">
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb="4">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>
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
        <FormControl id="roles" mb="4">
          <FormLabel>Roles</FormLabel>
          <Select
            isMulti
            options={roles}
            onChange={handleRoleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg" width="full" mb="4">
          Create User
        </Button>
      </form>
    </Box>
  );
};

export default UserCreationForm;
