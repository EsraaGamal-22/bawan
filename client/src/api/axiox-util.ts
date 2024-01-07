import axios from "axios";
import { toast } from "react-toastify";
export const baseURL = import.meta.env.VITE_BASE_URL;

export const request = axios.create({
  baseURL,
});

request.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(`error:`, error);
    toast("حدث خطا ما ", {
      type: "error",
    });
    throw error;
  }
);
