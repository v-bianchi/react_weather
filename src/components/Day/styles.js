import styled from 'styled-components';
import 'weather-icons-lite/css/weather-icons-lite.min.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  max-width: 80px;
  padding: 8px;
  border-radius: 10px;
  background: ${props => (props.active ? '#bcd4de' : 'none')};
`;

export const Label = styled.p`
  color: #5c80bc;
`;

export const Icon = styled.i.attrs(({ description }) => ({
  className: `wi wi-darksky-${description}`,
}))`
  font-size: 32px;
  color: #297373;
`;

export const Temperatures = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const MaxTemp = styled.span``;

export const MinTemp = styled.span`
  color: #5c80bc;
`;
