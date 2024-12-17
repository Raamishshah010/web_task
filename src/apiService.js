import axios from "axios";

// Base API URL

export const getDetails = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/details/all-detail"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching details:", error);
    throw error;
  }
};

export const deleteDetail = async (deleteID) => {
  let URL = "http://localhost:5000/details/delete-detail";
  try {
    const response = await axios.post(URL, {
      detailID: deleteID,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching details:", error);
    throw error;
  }
};
