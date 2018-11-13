// Add API_KEY and rootURL

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${rootURL}&q=${city},us`;

  return {
    type: FETCH_WEATHER
  };
}
