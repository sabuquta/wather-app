import axios from 'axios';

// fetch the city lat and lon
export const fetchCityCoordinates = async (city, apiKey) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_WEATHER_GEO_API_URL}?q=${city}&limit=1&appid=${apiKey}`
  );
  
  if (response.data.length === 0) {
    throw new Error('City not found');
  }

  return response.data[0]; 
};

//fetch weather data using lat,lon
export const fetchWeatherData = async (lat, lon, apiKey) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_WEATHER_API_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  );
  
  return response.data; 
};
