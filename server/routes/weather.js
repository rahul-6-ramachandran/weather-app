// routes/weather.js
import express from 'express'
import axios from 'axios';
import Weather from '../databases/models/weather.js' 

const router = express.Router();

router.get('/:city', async (req, res) => {
  const city = req.params.city;

  // Check cached data
  let cached = await Weather.findOne({ city });
  if (cached) return res.json(cached.data);

  // Fetch from OpenWeatherMap
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_APP_API}`
    );


    // Save to DB
    const weather = new Weather({ city, data: response.data });
    await weather.save();

    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

export default router;
