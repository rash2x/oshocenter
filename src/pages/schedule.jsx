import styled from 'styled-components';
import Layout from '../App/components/Layout';
import ScheduleCard from '../App/components/ScheduleCard';
import Pattern from '../../public/Pattern.svg';
import Pattern2 from '../../public/Pattern2.svg';
import Pattern3 from '../../public/Pattern3.svg';

const Base = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 42px;
  margin-top: 32px;
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  letter-spacing: -0.02em;
  margin: 0;
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
  text-align: center;
  color: ${props => props.theme.palette.primary.extra};
`;

const ScheduleInfo = [
  {
    title: 'Динамическая медитация',
    time: '7:00 - 8:00',
    details: 'каждое утро',
    img: Pattern,
    background: '#9FFFE0',
    timeBgr: '#64FFDA',
  },
  {
    title: 'Чакровое дыхание',
    time: '8:30 - 9:30',
    details: 'каждое воскресенье',
    img: Pattern2,
    background: '#B6E3FF',
    timeBgr: 'rgba(130, 177, 255, 0.5)',
  },
  {
    title: 'Кундалини медитация',
    time: '19:00 - 20:00',
    details: 'каждый вечер',
    img: Pattern3,
    background: '#FFBCAF',
    timeBgr: 'rgba(255, 138, 128, 0.5)',
  },
];

const Schedule = () => (
  <Layout>
    <Title>Ежедневные медитации</Title>
    <Subtitle>
      Любая ежедневная медитация <span>300 руб</span>
    </Subtitle>
    <Base>
      {ScheduleInfo.map(item => (
        <ScheduleCard key={item.title} {...item} />
      ))}
    </Base>
    <FreeLesson>Первое занятие бесплатно</FreeLesson>
  </Layout>
);

export default Schedule;
