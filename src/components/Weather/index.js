import React from 'react';

import DayList from '../DayList';

import { Container } from './styles';

export default function Weather() {
  return (
    <Container>
      <DayList />
      <div>Day details</div>
    </Container>
  );
}
