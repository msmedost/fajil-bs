
import axios from "axios";

const API_BASE_URL = "https://bs-mbhb.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const submitForm = async (formData) => {
  try {
    const response = await api.post("/submituser", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getForms = async () => {
  try {
    const response = await api.get("/getUser");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateFormStatus = async (formId, status) => {
  try {
    const response = await api.put(`/updatestatus/${formId}`, { status });
    return response.data;
  } catch (error) {
    throw error;
  }
};
