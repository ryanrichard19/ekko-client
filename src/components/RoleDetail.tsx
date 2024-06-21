import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import roleService from '../services/roleService';
import { Role } from '../models/role';

const RoleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [role, setRole] = useState<Role | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRole() {
      if (!id) return;

      try {
        const roleData = await roleService.getRole(id);
        setRole(roleData);
      } catch (error) {
        console.error('Failed to fetch role', error);
      }
    }

    fetchRole();
  }, [id]);

  const renderRoleHierarchy = (role: Role) => (
    <VStack align="start" spacing={2}>
      <Text>{role.name}</Text>
      {role.children && role.children.length > 0 && (
        <Box pl="4" borderLeft="2px" borderColor="gray.200">
          {role.children.map((child) => renderRoleHierarchy(child))}
        </Box>
      )}
    </VStack>
  );

  return (
    <Box p="4">
      <Button mb="4" onClick={() => navigate(-1)}>
        Back to Roles
      </Button>
      {role ? (
        <>
          <Heading as="h1" size="xl" mb="4">{role.name}</Heading>
          <Heading as="h2" size="md" mb="4">Role Hierarchy:</Heading>
          {renderRoleHierarchy(role)}
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
};

export default RoleDetail;
