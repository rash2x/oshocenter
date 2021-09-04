import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Pattern from '../../../public/Pattern.svg';

const Card = styled.div`
  max-width: 282px;
  height: 348px;
  background: #9fffe0;
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
  background: #64ffda;
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

const ScheduleCard = () => (
  <Link href="/">
    <Card>
      <Main>
        <CardTitle>Динамическая медитация</CardTitle>
        <Date>
          7:00 - 8:00
          <DateDetails>каждое утро</DateDetails>
        </Date>
      </Main>
      <Footer>
        <PatternImg src={Pattern} />
        <SignUp>Записаться</SignUp>
      </Footer>
    </Card>
  </Link>
);

export default ScheduleCard;
