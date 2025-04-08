import { withDelay } from "./utils";

export const WeatherInfo = async () => {
  const weatherInfo = await withDelay(
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
    ).then((res) => res.json()),
    2000
  );

  return <div>{weatherInfo.current.temperature_2m}</div>;
};
