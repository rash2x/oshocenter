import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.background};
  border-radius: 16px;
  max-width: 256px;
  width: 256px;
  height: 148px;
  padding: ${props => props.theme.spacing(2, 2)};
  text-align: end;
  margin: 16px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  text-align: left;
  color: ${props => props.color};
`;

const Price = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
`;

const SubscriptionCard = ({ title, price, background, color }) => (
  <CardWrapper background={background}>
    <Header>
      <Title color={color}>{title}</Title>
      <Logo inverse />
    </Header>
    <Price>{price} руб</Price>
  </CardWrapper>
);

export default SubscriptionCard;
