"use client"; // Mark this as a client component for useState and useReducer

import CityInput from '../components/CityInput';
import WeatherCard from '../components/WeatherCard';

import { useWeather } from '../hooks/useWeather';

export default function Home() {
  const [{ weatherData, isLoading, isError }, fetchWeather] = useWeather();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{marginBottom:"20px"}}>Weather App</h1>

      {/* City input and search */}
      <CityInput fetchWeather={fetchWeather} />

      {/* Weather data card */}
      {isLoading ? <p>Loading...</p> : 
      <>
      <WeatherCard weatherData={weatherData} isError={isError} />
      </>
      }
    </div>
  );
}