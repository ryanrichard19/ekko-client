import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import RoleList from './components/RoleList';
import RoleDetail from './components/RoleDetail';
import AddUserForm from './components/AddUserForm';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route  path="/home" element={<Home />} />
        <Route path="/users/new" element={<AddUserForm />} /> {/* Add this route before the users list route */}
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/roles" element={<RoleList />} />
        <Route path="/roles/:id" element={<RoleDetail />} />
        <Route  path="/" element={<Home />} />


      </Routes>
    </Router>
  );
};

export default App;
