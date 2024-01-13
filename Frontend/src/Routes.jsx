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
import PeoplePage from "pages/Public/PeoplePage";
import FeedBack from "pages/Public/FeedBack";
import Station0Page from "pages/Police/Station0";
import Station1Page from "pages/Police/Station1";
import Station2Page from "pages/Police/Station2";


const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoute />}>
          <Route path="police" element={<FounderPage />} />
          <Route path="police/station0" element={<Station0Page />} />
          <Route path="police/station1" element={<Station1Page />} />
          <Route path="police/station2" element={<Station2Page />} />
        </Route>

        {/* Normal User Routes */}
        <Route path="/user/*" element={<NormalUserRoute />}>
          <Route path="people" element={<PeoplePage />} />
          <Route path="feedback" element={<FeedBack />} />
          
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
