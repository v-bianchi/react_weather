import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DayList from '../DayList';
import buildDailyForecast from '../../utils';

import { Container } from './styles';

export default function Weather() {
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_API_KEY}/37.8267,-122.4233?exclude=currently,minutely,hourly,alerts,flags&units=si`;
      const {
        data: {
          daily: { data },
        },
      } = await axios.get(proxyUrl + targetUrl);
      setDailyForecast(buildDailyForecast(data));
    }

    fetchData();
  }, []);

  return (
    <Container>
      <DayList forecast={dailyForecast} />
      <div>Day details</div>
    </Container>
  );
}
