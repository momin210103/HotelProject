import { useState } from "react";
import { bookingService } from "../services/bookingService";

export const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const searchBooking = async (params) => {
    setLoading(true);
    const data = await bookingService.search(params);
    setResults(data);
    setLoading(false);
  };

  return { loading, results, searchBooking };
};
