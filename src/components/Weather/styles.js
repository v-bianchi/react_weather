import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: #fff;

  footer a {
    text-decoration: none;
    color: #5c9ead;
  }

  @media (min-width: 768px) {
    max-width: 668px;
    height: auto;
    margin: 50px auto;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);

    > * {
      margin-bottom: 50px;
    }
  }
`;
