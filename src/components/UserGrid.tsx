import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Badge,
  Button,
  Flex,
} from "@chakra-ui/react";
import { User } from "../models/user";
import MenuBar from "./MenuBar";

interface UserGridProps {
  users: User[];
}

const UserGrid: React.FC<UserGridProps> = ({ users }) => {
  function handleDelete(id: number) {
    // Add delete logic here
  }

  return (
    <Box>
      <MenuBar />
      <Box p="4">
        <Flex justify="space-between" align="center" mb="4">
          <Box as="h1" fontSize="2xl" fontWeight="bold">
            User List
          </Box>
          <Button as={Link} to="/users/new" colorScheme="teal" mb="4">
            Add New User
          </Button>
        </Flex>
        <Box overflowX="auto">
          <Table variant="simple" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Roles</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    {user.roles.map((role) => (
                      <Badge key={role.id} colorScheme="green" mr="1">
                        {role.name}
                      </Badge>
                    ))}
                  </Td>
                  <Td>
                    <Button
                      as={Link}
                      to={`/users/${user.id}`}
                      colorScheme="blue"
                      size="sm"
                      mr="2"
                    >
                      View Details
                    </Button>
                    <Button
                      as={Link}
                      to={`/users/${user.id}/edit`}
                      colorScheme="yellow"
                      size="sm"
                      mr="2"
                    >
                      Edit
                    </Button>
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default UserGrid;
