import axiosClient from "../../../api/axiosClient";

const hotelApi = {
  getHotelDetails: (id) => axiosClient.get(`/hotels/${id}`),
  getTreasures: (hotelId) => axiosClient.get(`/hotels/${hotelId}/treasures`),
};

export default hotelApi;
