import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

const AdminRoute = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const token = localStorage.getItem("user");
        console.log("tokem is : ", token)

        if (!token) {
          setIsLoading(false);
          return;
        }

        const res = await axios.get("http://localhost:8080/auth/admin-auth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Result: ", res);

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

    authCheck();
  }, []);

  return isLoading ? null : <Outlet />;
};

export default AdminRoute;
