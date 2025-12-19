import appConfig from "../config/appConfig";
import  bookingApi from "../api/bookingApi";
import  dummyBookingResults  from "../data/bookingDummy.js";

export const bookingService = {
  search: async (params) => {
    if (appConfig.useDummyData) {
      return new Promise((resolve) =>
        setTimeout(() => {
          let data = dummyBookingResults;
          if (params && params.location) {
            data = data.filter((item) => item.location === params.location);
          }
          resolve(data);
        }, 400)
      );
    }

    return bookingApi.search(params);
  },
};
