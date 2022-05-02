import { useEffect, useState } from "react";
import axios from "axios";

export const useGetDate = () => {
  const [errors, setErrors] = useState(false);
  const [pictureOfTheDay, setPictureOfTheDay] = useState([]);
  const tzoffset = (new Date()).getTimezoneOffset() * 60000;
  const [dateSelected, setDateSelected] = useState(new Date(tzoffset > 0 ? Date.now() : Date.now() - tzoffset));

  useEffect(() => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=zfiJIOKtBMcmy9INeU9CLAMddVwhv0Zy1ac5v4zm&date=${
      dateSelected.toISOString().split("T")[0]
    }`;

    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setPictureOfTheDay(data);
        setErrors(false)
      } catch (error) {
        setPictureOfTheDay([]);
        setErrors(error.response.data.msg || true);
      }
    };
    fetchData();
  }, [dateSelected]);

  return { errors, pictureOfTheDay, setDateSelected, dateSelected };
};
