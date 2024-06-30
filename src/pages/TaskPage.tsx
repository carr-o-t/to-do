import React, { useCallback, useEffect, useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { TypographyH2 } from "../components/ui/TypographyH2";
import { TypographyMuted } from "../components/ui/TypographyMuted";
import { Button } from "../components/ui/button";
import { useLazyGetWeatherQuery } from "../redux/api/weatherAPISlice";
import { toast } from "sonner";

const TaskPage: React.FC = () => {
  const [getWeather, { data, isloading }] = useLazyGetWeatherQuery();

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    error: "",
  });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: "",
          });
          getWeatherData({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          setLocation({
            latitude: 0,
            longitude: 0,
            error: error.message,
          });
        }
      );
    } else {
      setLocation({
        latitude: 0,
        longitude: 0,
        error: "Geolocation is not supported by this browser.",
      });
    }
  };

  const getWeatherData = useCallback(
    async ({ lat, lon }: { lat: number; lon: number }) => {
      const res = await getWeather({
        lat: lat,
        lon: lon,
      }).unwrap();
      if (!res.success) {
        toast.error("Oops! Sorry we couldn't get your weather data :(", {
          description: res.error.info,
        });
      }
    },
    // eslint-disable-next-line
    [location]
  );

  useEffect(() => {
    getLocation();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="w-full max-w-2xl mx-auto">
        <header className="flex w-full items-center justify-center flex-col">
          <TypographyH2>Get Things Done</TypographyH2>
          <TypographyMuted className="text-center">
            Stay organized and on top of your day with our intuitive task
            manager. Easily manage your tasks, set priorities, and track your
            progress effortlessly.
          </TypographyMuted>
        </header>
      </div>

      <div className="max-w-xl mx-auto p-4">
        <TaskInput />
        <TaskList />
        <div className="h-4">
          {(location.error ||
            location.latitude === 0 ||
            location.longitude === 0) && (
            <div className="w-full flex justify-center">
              <Button variant={"link"} onClick={() => getLocation()}>
                Enable location
              </Button>
            </div>
          )}
          {data && !isloading && data.success && (
            <TypographyMuted>
              Temperature Today: {data?.current?.temperature}°C
            </TypographyMuted>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskPage;
