import axios from "axios";

const fetchUserData = async () => {
  try {
    const response = await axios.get(
      "https://randomuser.me/api/?page=1&results=1&seed=abc"
    );
    return response.data.results[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch user data. Please try again later.");
  }
};
const api = {
  fetchUserData,
};

export default api;
