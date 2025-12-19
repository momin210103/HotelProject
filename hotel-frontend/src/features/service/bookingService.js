import axiosClient from "../api/axiosClient";

export const searchAvailableHotels = async (payload) => {
  return await axiosClient.post("/Booking/Search", payload);
};
