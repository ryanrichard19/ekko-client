const authService = {
    login: async (email: string, password: string) => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      localStorage.setItem('token', data.access_token);
    },
    
    getToken: () => {
      return localStorage.getItem('token');
    },
  };
  
  export default authService;
  