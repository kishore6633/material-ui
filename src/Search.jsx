import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Search({ updateinfo }) {
  let [city, setCity] = useState("");
  let [error, seterror] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

 let fetchdata = async () => {
  try {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    let JSONres = await response.json();
    let result = {
      city: city,
      temp: JSONres.main.temp,
      tempMax: JSONres.main.temp_max,
      tempMin: JSONres.main.temp_min,
      humidity: JSONres.main.humidity,
      feelslike: JSONres.main.feels_like,
      weather: JSONres.weather[0].description,
    };

    return result;
  } catch (error) {
    throw error;
  }
};

  let handlechange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let newinfo = await fetchdata();
      updateinfo(newinfo);
      setCity("");
      seterror(false);
    } catch (error) {
      seterror(true);
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'Arial, sans-serif',
            color: '#05d313ff',
            marginTop: "20px",
          }}
        >
          Search weather here
        </h1>

        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="Enter Major City Name"
            variant="outlined"
            value={city}
            required
            onChange={handlechange}
          />

          <Button
            variant="contained"
            style={{ height: '55px', marginLeft: '10px' }}
            type="submit"
          >
            Search
          </Button>

          {error && <p style={{
            color:"red"
          }}>No such city in our database</p>}
        </form>
      </div>
    </>
  );
}
