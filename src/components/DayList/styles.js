import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(5, 1fr);
  padding: 25px;
  grid-gap: 10px;
  width: 100%;
`;
