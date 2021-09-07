import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../App/components/Layout';
import TryMeditation from '../App/components/TryMeditation';
import { Table, TableCell, TableRow, Typography } from '@material-ui/core';

const StyledTable = styled(Table)`
  max-width: 620px;
  margin: 0 auto;
  
  td {
    border-bottom: 0;
    font-size: 16px;
    font-style: italic;
    font-weight: 600;
    
    &:first-child {
      border-right: 1px solid ${props => props.theme.palette.divider};
    }
  }
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

  text-align: center;
  font-weight: 600;
  font-style: italic;
  
  span {
    color: ${props => props.theme.palette.primary.main};
  }
`;

const subscriptions = [

  {
    title: 'Ежедневная медитация',
    price: '300',
    background: 'rgba(231, 185, 255, 0.24)',
  },
  {
    title: 'Неделя новичка',
    price: '1500',
    background: 'rgba(167, 255, 235, 0.24)',
  },
  {
    title: '21 день интенсив',
    price: '4500',
    background: 'rgba(255, 255, 177, 0.24)',
  },

  {
    title: 'Абонемент 1 месяц',
    price: '5900',
  },
  {
    title: 'Абонемент 3 месяца',
    price: '12000',
  },
  {
    title: 'Абонемент 6 месяцев',
    price: '18000',
  },
  {
    title: 'Абонемент 12 месяцев',
    price: '26000',
  },
];

const Subscription = () => (
  <>
    <Head>
      <title>Стоимость и Абонементы | Центр Ошо Медитаций</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <Title>Стоимость и абонементы</Title>
      <Subtitle>
        Абонементы действуют только на <span>Ошо Медитации</span>. <br />С ними вы можете посещать любое
        количество занятий в течении выбранного периода
      </Subtitle>
      <StyledTable>
        {subscriptions.map(item => (<TableRow style={{ backgroundColor: item.background }}>
          <TableCell>{item.title}</TableCell>
          <TableCell>{item.price}</TableCell>
        </TableRow>))}
      </StyledTable>

      <TryMeditation />
    </Layout>
  </>
);

export default Subscription;
