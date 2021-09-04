import styled from 'styled-components';
import Layout from '../App/components/Layout';
import SubscriptionCard from '../App/components/SubscriptionCard';

const Base = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  margin-bottom: 150px;
`;

const Title = styled.h1`
  display: flex;
  align-items: baseline;
  margin: 48px 0;
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  font-size: 32px;
  display: block;
  text-align: center;
`;

const Subscription = () => (
  <Layout>
    <Title>Стоимость и абонементы</Title>
    <Base>
      <SubscriptionCard />
      <SubscriptionCard />
      <SubscriptionCard />
      <SubscriptionCard />
      <SubscriptionCard />
      <SubscriptionCard />
      <SubscriptionCard />
    </Base>
  </Layout>
);

export default Subscription;
