import React from 'react';

import Day from '../Day';

import { Container } from './styles';

export default function DayList({ forecast }) {
  return (
    <Container>
      {forecast.map(dayData => (
        <Day forecast={dayData} key={dayData.id} />
      ))}
    </Container>
  );
}
