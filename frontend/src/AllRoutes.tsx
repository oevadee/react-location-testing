import React from 'react';
import { Navigate, Route, Routes } from 'react-location';
import {
  Todo,
  About,
  Profile,
  Logout,
  NotFound,
  Login,
  Register,
} from './routes';

const AllRoutes = () => {
  const user = false;
  return (
    <Routes>
      {!user ? (
        <>
          <Route path="*" element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </>
      ) : (
        <>
          <Route path="todo" element={<Todo />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
        </>
      )}
    </Routes>
  );
};

export default AllRoutes;
