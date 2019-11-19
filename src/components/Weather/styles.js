import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  width: 100%;
  background: #fff;

  @media (min-width: 768px) {
    max-width: 668px;
    margin: 50px auto;
  }
`;
