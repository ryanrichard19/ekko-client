// src/pages/Home.tsx
import React from 'react';
import useFetch from '../hooks/useFetch';

const Home: React.FC = () => {
  const { data, loading, error } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/health`);

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Health Status: {data?.status}</h1>
    </div>
  );
};

export default Home;
