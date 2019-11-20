import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DayList from '../DayList';
import buildDailyForecast from '../../utils';

import { Container } from './styles';

export default function Weather() {
  const [dailyForecast, setDailyForecast] = useState([]);
  const [selectedDayId, setSelectedDayId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_API_KEY}/45.515018,-73.585770?exclude=currently,minutely,hourly,alerts,flags&units=si`;
      const { data } = await axios.get(proxyUrl + targetUrl);
      setDailyForecast(buildDailyForecast(data));
    }

    fetchData();
  }, []);

  return (
    <Container>
      <h1>Weather in Montréal</h1>
      <DayList
        forecast={dailyForecast}
        setSelectedDayId={setSelectedDayId}
        selectedDayId={selectedDayId}
      />
      <div>Day details</div>
    </Container>
  );
}
