import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import RoleList from './components/RoleList';
import RoleDetail from './components/RoleDetail';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route  path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/roles" element={<RoleList />} />
        <Route path="/roles/:id" element={<RoleDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
};

export default App;
