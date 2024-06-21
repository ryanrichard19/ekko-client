import React from 'react';
import useFetch from '../hooks/useFetch';
import MenuBar from '../components/MenuBar';
import { Box, Heading, Text } from '@chakra-ui/react';

const Home: React.FC = () => {
  const { data, loading, error } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/health`);

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <MenuBar />
      <Box p="4">
        <Heading as="h1">Health Status</Heading>
        <Text>Status: {data?.status}</Text>
      </Box>
    </>
  );
};

export default Home;
