import { SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { getAllwhetherDetails } from "../actions/weatherAction";

export default function TempTodayContainer() {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState("kochi");

  useEffect(() => {
    getWeatherData();
  }, [city]);

  const getWeatherData = () => {
    getAllwhetherDetails(city).then((res) => {
      setWeatherData(res.data);
    });
  };
  return (
    <>
      <div className="rounded-4xl w-full flex h-full bg-[#FAE2BD] flex flex-col p-6 text-[#EFAA82]">
        <div>
          <p className="flex  items-center gap-2 md:text-3xl text-center font-medium">
            Today{" "}
            <svg
              className="w-3 h-3 text-[#EFAA82]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          </p>
        </div>
        <div className="flex gap-7 w-70  mx-0 m-0 p-0 ">
          <img
            src="/images/Vector.png"
            alt=""
            className="md:w-full  md:h-full"
          />

          <span
            className="md:text-6xl  text:4xl  font-medium font-poppins flex"
            style={{ fontFamily: "poppins" }}
          >
            {" "}
            {weatherData?.main?.temp}
          </span>
        </div>
        <div className="flex flex-col gap-3 text-xl">
          <p className="font-bold">{weatherData?.weather[0]?.main}</p>
          <p>{weatherData?.name}</p>
          <p>{new Date().toDateString()}</p>
          <p>
            Feels like : {weatherData?.main?.feels_like} | Sunset{" "}
            {weatherData?.sys?.sunset}
          </p>
        </div>
      </div>
    </>
  );
}
