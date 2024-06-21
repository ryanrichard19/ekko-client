import React, { useEffect, useState } from 'react';
import useAuthFetch from '../hooks/useAuthFetch';
import UserGrid from './UserGrid';
import { Box, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import { User } from '../models/user';


const UserList: React.FC = () => {
  const { data, loading, error } = useAuthFetch(`${process.env.REACT_APP_BACKEND_URL}/users`);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  if (loading) {
    return (
      <Box textAlign="center" mt="20">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert status="error" mt="20">
        <AlertIcon />
        {error.message}
      </Alert>
    );
  }

  return <UserGrid users={users} />;
};

export default UserList;