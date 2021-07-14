import React from "react";
import { Route, Routes } from "react-location";
import { Todo, About, Profile, Logout } from "./components";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="about" element={<About />} />
      <Route path="profile" element={<Profile />} />
      <Route path="logout" element={<Logout />} />
    </Routes>
  );
};

export default AllRoutes;
