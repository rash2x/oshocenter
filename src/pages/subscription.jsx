import { Container } from '@material-ui/core';
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
  margin: 48px auto;
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  font-size: 32px;
`;

const Subscription = () => (
  <Layout>
    <Title>Стоимость и абонементы</Title>
    <Container maxWidth="md">
      <Base>
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
      </Base>
    </Container>
  </Layout>
);

export default Subscription;
