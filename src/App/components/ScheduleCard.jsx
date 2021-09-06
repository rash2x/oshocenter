import Image from 'next/image';
import styled from 'styled-components';

const Card = styled.div`
  max-width: 282px;
  height: 348px;
  background: ${props => props.background};
  border-radius: 20px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.div`
  padding: 16px 24px 0;
`;

const CardTitle = styled.div`
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  margin-top: 24px;
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  font-size: 32px;
  background: ${props => props.timeBgr};
  border-radius: 16px;
`;
const DateDetails = styled.div`
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  font-size: 16px;
`;

const Footer = styled.div``;
const PatternImg = styled(Image)``;

const SignUp = styled.button`
  font-family: Montserrat;
  font-style: italic;
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  padding: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ScheduleCard = ({ title, time, details, img, background, timeBgr }) => (
  <Card background={background}>
    <Main>
      <CardTitle>{title}</CardTitle>
      <Date timeBgr={timeBgr}>
        {time}
        <DateDetails>{details}</DateDetails>
      </Date>
    </Main>
    <Footer>
      <PatternImg src={img} />
      <SignUp>Записаться</SignUp>
    </Footer>
  </Card>
);

export default ScheduleCard;
