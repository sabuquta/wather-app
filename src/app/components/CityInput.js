import { Input, Button } from 'antd';
import { useState } from 'react';

const CityInput = ({ fetchWeather }) => {
  const [city, setCity] = useState('');

  // Handle city input change
  const handleCityInput = (e) => {
    setCity(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    if (city) {
      fetchWeather(city);
    }
  };

  return (
    <div>
      {/* Input for city name */}
      <Input
        placeholder="Enter city"
        value={city}
        onChange={handleCityInput}
        style={{ width: 300, marginBottom: '20px',padding:"5px" }}
      />

      {/* Search button */}
      <Button type="primary" onClick={handleSearch} style={{ marginBottom: '20px', padding:"5px", marginLeft: "10px" }}>
        Fetch Weather
      </Button>
    </div>
  );
};

export default CityInput;