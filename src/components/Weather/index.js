import React, { useState, useEffect } from 'react';

import DayList from '../DayList';

import { Container } from './styles';

export default function Weather() {
  const [dailyForecast, setDailyForecast] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_API_KEY}/37.8267,-122.4233?exclude=currently,minutely,alerts,flags&units=si&extend=hourly`;
    fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(parsedResponse => {
        // handle API data
      });
  }, []);

  return (
    <Container>
      <DayList />
      <div>Day details</div>
    </Container>
  );
}
