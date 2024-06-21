import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import roleService from '../services/roleService';
import { RoleDetailDto } from '../models/roledetailDto';
import MenuBar from './MenuBar';

const RoleList: React.FC = () => {
    const [roles, setRoles] = useState<RoleDetailDto[]>([]);

    useEffect(() => {
        const fetchRoles = async () => {
            const rolesData = await roleService.getRoles();
            setRoles(rolesData);
        };

        fetchRoles();
    }, []);

    return (
        <Box>
            <MenuBar />
            <Box p="4">
                <Flex justify="space-between" align="center" mb="4">
                    <Box as="h1" fontSize="2xl" fontWeight="bold">Role List</Box>
                    <Button as={Link} to="/roles/new" colorScheme="teal">Add New Role</Button>
                </Flex>
                <Box overflowX="auto">
                    <Table variant="simple" colorScheme="teal">
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {roles.map((role) => (
                                <Tr key={role.id}>
                                    <Td>{role.name}</Td>
                                    <Td>
                                        <Button as={Link} to={`/roles/${role.id}`} colorScheme="blue" size="sm" mr="2">
                                            View Details
                                        </Button>
                                        <Button as={Link} to={`/roles/${role.id}/edit`} colorScheme="yellow" size="sm" mr="2">
                                            Edit
                                        </Button>
                                        <Button colorScheme="red" size="sm" onClick={() => handleDelete(role.id)}>
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

    async function handleDelete(id: number) {
        await roleService.deleteRole(id);
        setRoles(roles.filter((role) => role.id !== id));
    }
};

export default RoleList;
