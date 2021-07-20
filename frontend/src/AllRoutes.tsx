import React from 'react';

import { Navigate, Route, Routes } from 'react-location';

import { MyLyrics, Profile, Logout, NotFound } from './routes';
import { Login, Register } from './routes/Auth';
import { useApp as useAppContext } from './context/appContext';
import { Guessing } from './routes/App';
import Success from './routes/App/Success';

const AllRoutes = () => {
  const { user } = useAppContext();

  return (
    <Routes>
      {!user ? (
        <>
          <Route path="*" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </>
      ) : (
        <>
          <Route path="*" element={<Navigate to="guesser" />} />
          <Route path="" element={<Guessing />} />
          <Route path="success" element={<Success />} />
          <Route path="my-lyrics" element={<MyLyrics />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
        </>
      )}
    </Routes>
  );
};

export default AllRoutes;
