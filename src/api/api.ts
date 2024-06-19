export const fetchHealthStatus = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/health`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };