import React, { useState, useEffect } from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import axios from 'axios';

import DayList from '../DayList';
import DayDetails from '../DayDetails';
import buildDailyForecast from '../../utils';

import { Container } from './styles';

export default function Weather() {
  const [place, setPlace] = useState({
    name: 'Montreal',
    lat: 45.515018,
    lng: -73.58577,
  });
  const [dailyForecast, setDailyForecast] = useState([]);
  const [selectedDayId, setSelectedDayId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_API_KEY}/${place.lat},${place.lng}?exclude=currently,minutely,hourly,alerts,flags&units=si`;
      const { data } = await axios.get(proxyUrl + targetUrl);
      setDailyForecast(buildDailyForecast(data));
    }

    fetchData();
  }, [place]);

  return (
    <Container>
      <div>
        <h1>Weather in</h1>
        <AlgoliaPlaces
          placeholder={place.name}
          options={{
            appId: process.env.REACT_APP_ALGOLIA_APP_ID,
            apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
            language: 'en',
            type: 'city',
          }}
          onChange={({ suggestion }) => {
            setSelectedDayId(null);
            setPlace({
              name: suggestion.name,
              lat: suggestion.latlng.lat,
              lng: suggestion.latlng.lng,
            });
          }}
        />
      </div>
      <DayList
        forecast={dailyForecast}
        setSelectedDayId={setSelectedDayId}
        selectedDayId={selectedDayId}
      />
      {selectedDayId && (
        <DayDetails
          forecast={dailyForecast.find(day => day.id === selectedDayId)}
        />
      )}
      <footer>
        <small>
          <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </small>
      </footer>
    </Container>
  );
}
