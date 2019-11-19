import React from 'react';

import {
  Container,
  Label,
  Icon,
  Temperatures,
  MinTemp,
  MaxTemp,
} from './styles';

export default function Day() {
  return (
    <Container>
      <Label>Mon</Label>
      <Icon />
      <Temperatures>
        <MinTemp>16</MinTemp>
        <MaxTemp>22</MaxTemp>
      </Temperatures>
    </Container>
  );
}
