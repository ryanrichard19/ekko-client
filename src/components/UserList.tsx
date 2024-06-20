import React, { useEffect, useState } from 'react';
import useAuthFetch from '../hooks/useAuthFetch';
import UserGrid from './UserGrid';

interface Role {
    id: number;
    name: string;
  }
  
  interface User {
    id: number;
    name: string;
    email: string;
    roles: Role[];
  }
  

const UserList: React.FC = () => {
  const { data, loading, error } = useAuthFetch(`${process.env.REACT_APP_BACKEND_URL}/users`);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <UserGrid users={users} />;
};

export default UserList;