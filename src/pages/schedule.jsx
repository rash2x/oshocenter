import styled from 'styled-components';
import Layout from '../App/components/Layout';
import ScheduleCard from '../App/components/ScheduleCard';

const Base = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 62px;
  margin-top: 48px;
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  letter-spacing: -0.02em;
  margin: 48px 0 16px;
`;

const Subtitle = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  margin: 16px 0px;
  color: ${props => props.theme.palette.primary.extra};

  span {
    font-weight: 700;
    font-size: 24px;
  }
`;

const FreeLesson = styled.div`
  font-family: Montserrat;
  font-style: italic;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 193px;
  text-align: center;
  color: ${props => props.theme.palette.primary.extra};
`;

const Schedule = () => (
  <Layout>
    <Title>Ежедневные медитации</Title>
    <Subtitle>
      Любая ежедневная медитация <span>300 руб</span>
    </Subtitle>
    <Base>
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
    </Base>
    <FreeLesson>Первое занятие бесплатно</FreeLesson>
  </Layout>
);

export default Schedule;
