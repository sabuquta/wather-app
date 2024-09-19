import { useReducer } from 'react';
import { weatherReducer, FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from '../reducers/weatherReducer';
import { fetchCityCoordinates, fetchWeatherData } from '../api/weatherApi';

// Custom hook for fetching weather
export const useWeather = () => {
  const [state, dispatch] = useReducer(weatherReducer, {
    isLoading: false,
    weatherData: null,
    isError: false,
  });

  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  const fetchWeather = async (city) => {
    dispatch({ type: FETCH_INIT });

    try {
      // fetch lat,lan then fetch weather data
      const { lat, lon } = await fetchCityCoordinates(city, apiKey);
      const weatherData = await fetchWeatherData(lat, lon, apiKey);
      // sucess
      dispatch({ type: FETCH_SUCCESS, payload: weatherData });
    } catch (error) {
      // Error
      dispatch({ type: FETCH_FAILURE });
    }
  };

  return [state, fetchWeather];
};