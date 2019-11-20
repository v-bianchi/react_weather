import React from 'react';

import {
  Container,
  Label,
  Icon,
  Temperatures,
  MinTemp,
  MaxTemp,
} from './styles';

export default function Day({ forecast }) {
  return (
    <Container>
      <Label>{forecast.label}</Label>
      <Icon description={forecast.icon} />
      <Temperatures>
        <MaxTemp>{forecast.maxTemp}</MaxTemp>
        <MinTemp>{forecast.minTemp}</MinTemp>
      </Temperatures>
    </Container>
  );
}
