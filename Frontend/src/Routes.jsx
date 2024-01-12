import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "pages/HomePage/home";
import NotFound from "pages/NotFound";
import FounderPage from "pages/Police/FounderPage";
import Login from "pages/auth/Login";
import SignUp from "pages/auth/SignUp";
import AdminRoute from "components/RoleRoutes/AdminAuth";
import NormalUserRoute from "components/RoleRoutes/UserAuth";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoute />}>
          <Route path="founder" element={<FounderPage />} />
        </Route>

        {/* Normal User Routes */}
        <Route path="/user/*" element={<NormalUserRoute />}>
          <Route path="abc" element={<HomePage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
