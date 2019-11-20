import React from 'react';

import Day from '../Day';

import { Container } from './styles';

export default function DayList({ forecast, setSelectedDayId, selectedDayId }) {
  return (
    <Container>
      {forecast.map(dayData => (
        <Day
          forecast={dayData}
          setSelectedDayId={setSelectedDayId}
          selectedDayId={selectedDayId}
          key={dayData.id}
        />
      ))}
    </Container>
  );
}
