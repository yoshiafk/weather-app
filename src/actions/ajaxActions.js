import { FETCH_WEATHER } from "./types";

export const fetchWeather = () => async (dispatch) => {
  const ids = {
    Jakarta: 1642907,
    Bandung: 1650357,
    Semarang: 1627896,
  };

  const fetches = await Promise.all(
    Object.values(ids).map((e) =>
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${e}&appid=57e9404d07765a76706b995082326642
`
      ).then((e) => e.json())
    )
  );

  dispatch({
    type: FETCH_WEATHER,
    payload: {
      Jakarta: fetches[0],
      Bandung: fetches[1],
      Semarang: fetches[2],
    },
  });
};
