import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

const NormalUserRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const authCheck = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsLoading(false);
        return;
      }

      const res = await axios.get("http://localhost:8080/auth/user-auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("User Result: ", res);

      if (res.data.ok) {
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    authCheck();
  }, []); 

  return isLoading ? null : <Outlet />;
};

export default NormalUserRoute;
