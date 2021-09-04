import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Logo from './Logo';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(231, 185, 255, 0.24);
  border-radius: 16px;
  max-width: 256px;
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
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  text-align: left;
`;

const Price = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
`;

const SubscriptionCard = () => (
  <Link href="/">
    <CardWrapper>
      <Header>
        <Title>Ежедневная медитация</Title>
        <Logo inverse />
      </Header>
      <Price>300 руб</Price>
    </CardWrapper>
  </Link>
);

export default SubscriptionCard;
