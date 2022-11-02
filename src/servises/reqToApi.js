import axios from "axios";

axios.defaults.baseURL = "https://involve.software/test_front/api";

const getMethods = async () => {
  try {
    const response = await axios.get("/payMethods");

    return await response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export { getMethods };
