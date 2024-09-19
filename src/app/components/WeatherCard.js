import { Card, Alert } from 'antd';
import Image from 'next/image'
const WeatherCard = ({ weatherData, isError }) => {
  if (isError) {
    return <Alert style={{width:420, margin:"0 auto"}} message="Error fetching weather data" type="error" />;
  }

  if (!weatherData) {
    return null;
  }

  return (
    <Card
      title={`Weather in ${weatherData.name}`}
      bordered={false}
      style={{ width: 300, margin: '20px auto' }}
    >
      <p>Temperature: <b>{weatherData.main.temp} °C</b></p>
      <p>Description: <b>{weatherData.weather[0].description}</b></p>
      <Image
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
        width={100}
        height={100} 
      />
       <p>Wind: <b>{weatherData?.wind?.speed} km/h</b></p>
      <p>Humidity: <b>{weatherData?.main?.humidity}%</b></p>
    </Card>
  );
};

export default WeatherCard;