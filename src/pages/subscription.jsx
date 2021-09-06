import styled from 'styled-components';
import Layout from '../App/components/Layout';
import SubscriptionCard from '../App/components/SubscriptionCard';
import TryMeditation from '../App/components/TryMeditation';

const Base = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
`;

const Title = styled.h1`
  align-items: baseline;

  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  margin: 40px 0 0;
  text-align: center;
`;

const Subtitle = styled.div`
  max-width: 480px;
  margin: 16px auto 40px;
  
  font-style: italic;
  text-align: center;
`;

const subscriptions = [

  {
    title: 'Абонемент 3 месяца',
    price: '12000',
    background: 'rgba(182, 227, 255, 0.24)',
    color: '#82B1FF',
  },
  {
    title: 'Абонемент 6 месяцев',
    price: '18000',
    background: 'rgba(182, 227, 255, 0.24)',
    color: '#82B1FF',
  },
  {
    title: 'Абонемент 12 месяцев',
    price: '26000',
    background: 'rgba(182, 227, 255, 0.24)',
    color: '#82B1FF',
  },
  {
    title: 'Неделя новичка',
    price: '1500',
    background: 'rgba(167, 255, 235, 0.24)',
    color: '#A7FFEB',
  },
  {
    title: '21 день интенсив',
    price: '4500',
    background: 'rgba(255, 255, 177, 0.24)',
    color: '#FFD180',
  },
  {
    title: 'Абонемент 1 месяц',
    price: '5900',
    background: 'rgba(182, 227, 255, 0.24)',
    color: '#82B1FF',
  },
  {
    title: 'Ежедневная медитация',
    price: '300',
    background: 'rgba(231, 185, 255, 0.24)',
    color: '#E7B9FF',
  },
];

const Subscription = () => (
  <Layout>
    <Title>Стоимость и абонементы</Title>
    <Subtitle>
      Абонементы действуют только на Ошо Медитации. <br/>
      С ними вы можете посещать любое количество занятий в течении выбранного периода
    </Subtitle>
    <Base>
      {subscriptions.map(item => (
        <SubscriptionCard key={item.title} {...item} />
      ))}
    </Base>

    <TryMeditation />
  </Layout>
);

export default Subscription;
