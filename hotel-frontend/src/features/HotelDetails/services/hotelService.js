import appConfig from "../../../config/appConfig";
import hotelApi from "../api/hotelApi";
import { hotelsDatabase, treasuresByHotel } from "../data/hotelDummy";

function fakeDelay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

export const hotelService = {
  async getHotelDetails(id) {
    if (appConfig.useDummyData) {
      await fakeDelay(300);
      const hotel = hotelsDatabase[id];
      if (!hotel) {
        throw new Error(`Hotel with ID ${id} not found`);
      }
      return hotel;
    }
    return hotelApi.getHotelDetails(id);
  },

  async getTreasures(hotelId) {
    if (appConfig.useDummyData) {
      await fakeDelay(300);
      return treasuresByHotel[hotelId] || [];
    }
    return hotelApi.getTreasures(hotelId);
  }
};
