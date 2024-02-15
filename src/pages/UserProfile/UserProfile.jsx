import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import api from "../../services/api";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await api.fetchUserData();
        setUserData(user);
      } catch (error) {
        console.error("Error in UserProfile component:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        userData && <Card userData={userData} />
      )}
    </div>
  );
};
export default UserProfile;
