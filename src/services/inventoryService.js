import API from "./API";

export const createInventory = async (data) => {
  try {
    console.log("Sending data to API:", data); // ✅ Debugging
    const response = await API.post("/inventory/create-inventory", data);
    console.log("API Response:", response.data); // ✅ Debugging
    return response.data;
  } catch (error) {
    console.error("Error creating inventory:", error.response?.data || error);
    alert(error.response?.data?.message || "Failed to create inventory.");
  }
};
