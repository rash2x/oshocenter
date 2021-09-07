import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../App/components/Layout';
import ScheduleCard from '../App/components/ScheduleCard';
import TryMeditation from '../App/components/TryMeditation';

const ScheduleList = styled.div`
  display: flex;
  margin-bottom: 42px;
  margin-top: 40px;
  flex-wrap: wrap;
  border-right: 1px solid ${props => props.theme.palette.divider};
  border-top: 1px solid ${props => props.theme.palette.divider};
`;

const Title = styled.h1`
  margin: 40px 0 0;
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.h2`
  margin-top: 8px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  font-style: italic;

  span {
    font-weight: 700;
    font-size: 24px;
  }
`;

const Events = styled.div`
  margin-top: 80px;
`;

const meditations = [
  {
    title: 'Динамическая медитация',
    type: 'Ошо медитация',
    time: '7:00 - 8:00',
    date: 'Каждое утро',
    background: 'rgba(179, 136, 255, 0.1)',
    typeColor: '#7c4dff',
  },
  {
    title: 'Кундалини медитация',
    type: 'Ошо медитация',
    time: '19:00 - 20:00',
    date: 'Каждое утро',
    background: 'rgba(179, 136, 255, 0.1)',
    typeColor: '#7c4dff',
  },
  {
    title: 'Чакровое дыхание',
    type: 'Ошо медитация',
    time: '8:30 - 9:30',
    date: 'Каждую субботу',
    background: 'rgba(179, 136, 255, 0.1)',
    typeColor: '#7c4dff',
  },
  {
    title: 'Тантра Света',
    type: 'Медитация',
    time: '20:15 - 22:15',
    date: 'Каждый вторник',
    background: 'rgba(179, 136, 255, 0.1)',
    typeColor: '#7c4dff',
  },
  {
    title: 'Арт & Медитация',
    type: 'Медитация',
    time: '19:00 - 20:00',
    date: 'Каждую среду',
    background: 'rgba(179, 136, 255, 0.1)',
    typeColor: '#7c4dff',
  },
  {
    title: 'Energy Flow Dance',
    type: 'Медитация',
    time: '20:15 - 22:15',
    date: '10 сентября',
    background: '',
    typeColor: '#ff4081',
  },
  {
    title: 'АУМ',
    type: 'Медитация',
    time: '19:00 - 22:30',
    date: '6 сентября',
    background: '',
    typeColor: '#ff4081',
  },
  {
    title: '',
    type: '',
    time: '',
    date: '',
    background: '',
    typeColor: '#B388FF',
    disabled: true,
  },
];

const events = [
  {
    title: 'Тренинг ведущих ОШО медитаций',
    type: 'Тренинг',
    time: '7:00 - 8:00',
    date: '8-28 ноября',
    background: '',
    typeColor: '#00b686',
  },
  {
    title: 'Ошо-Суфи-Дзен “Жизнь. Любовь. Смех.” 💫',
    type: 'Интенсив',
    time: '19:00 - 20:00',
    date: '1-3 октября',
    background: 'rgba(255, 209, 128, 0.1)',
    typeColor: '#ffc400',
  },
  {
    title: 'Тренинг по классическому массажу',
    type: 'Тренинг',
    time: '8:30 - 9:30',
    date: '6-10 октября',
    background: '',
    typeColor: '#00b686',
  },
  {
    title: 'Ошо Мистическая Роза 🌹',
    type: 'Терапия',
    time: '19:00 - 22:00',
    date: '8-28 ноября',
    background: 'rgba(255, 82, 82, 0.1)',
    typeColor: '#f50057',
    titleColor: '#f50057',
    titleFontFamily: 'Philosopher',
    titleFontSize: '24px',
  },
];

const Schedule = () => (
  <>
    <Head>
      <title>Расписание | Центр Ошо Медитаций</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <Title>Расписание медитаций</Title>
      <Subtitle>“Медитация с утра помогает начать отличный день”</Subtitle>
      <ScheduleList>
        {meditations.map(item => (
          <ScheduleCard key={item.title} {...item} />
        ))}
      </ScheduleList>

      <Events>
        <Title>Ближайшие события</Title>
        <ScheduleList>
          {events.map(item => (
            <ScheduleCard key={item.title} {...item} isEvent={true} />
          ))}
        </ScheduleList>
      </Events>
      <TryMeditation />
    </Layout>
  </>
);

export default Schedule;
