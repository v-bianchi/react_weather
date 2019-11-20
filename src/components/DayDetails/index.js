import React from 'react';

import { Container } from './styles';

export default function DayDetails({ forecast }) {
  return (
    <Container>
      <h3>{forecast.summary}</h3>
      <p>Relative humidity: {forecast.humidity}</p>
      <p>High of {forecast.maxTemp}, feels like {forecast.apparentMaxTemp}</p>
      <p>Low of {forecast.minTemp}, feels like {forecast.apparentMinTemp}</p>
      <p>Chance of {forecast.precipType}: {forecast.precipProbability}</p>
    </Container>
  );
}
