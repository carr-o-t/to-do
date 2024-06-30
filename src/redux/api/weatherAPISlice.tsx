import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WEATHER_API_URL } from "../../config";
import { Main } from "../../types";

export const weatherAPI = createApi({
  reducerPath: "weatherAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${WEATHER_API_URL}`,
  }),
  /* ------------------ add tags for caching and revalidation ----------------- */
  tagTypes: ["weather"],

  /* ------------------------- defining api endpoints ------------------------- */
  endpoints: (builder) => ({
    getWeather: builder.query<Main.WeatherAPIRes, { lat: number; lon: number }>(
      {
        query: (reqBody) => ({
          url: `?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${reqBody.lat},${reqBody.lon}`,
          method: "GET",
        }),
        transformResponse: (response: Main.WeatherAPIRes) => response,
      }
    ),
  }),
});

export const {
  useGetWeatherQuery,
  useLazyGetWeatherQuery,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useGetWeatherQuery: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useLazyGetWeatherQuery: any;
} = weatherAPI;
