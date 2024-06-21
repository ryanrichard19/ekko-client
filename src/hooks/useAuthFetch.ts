import { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from '../models/user';


const useAuthFetch = (url: string) => {
  const [data, setData] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setData(response.data);
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          setError(new Error(error.response?.data?.message || 'An error occurred while fetching data'));
        } else {
          setError(new Error('An unknown error occurred'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useAuthFetch;