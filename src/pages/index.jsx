import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Layout from '../App/components/Layout';
import Play from '../../public/PlayBtn.svg';

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
`;

const Text = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  display: flex;
  align-items: baseline;
  margin: 0;

  div {
    @media (max-width: 425px) {
      font-size: 32px;
      margin: 0;

      &:first-child {
        width: 100%;
      }
      &:nth-child(2) {
        margin-right: 8px;
      }
    }
  }
  @media (max-width: 425px) {
    font-size: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 16px;
  }
`;

const Subtitle = styled.h2`
  margin-top: 0;
  font-style: italic;
  font-weight: 600;
  font-size: 32px;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const Philosopher = styled.div`
  font-style: italic;
  font-weight: 700;
  font-size: 56px;
  margin-right: 16px;
`;
const Bold = styled.div`
  font-family: Philosopher;
  font-style: italic;
  font-weight: 800;
  font-size: 52px;
  margin-right: 16px;
`;
const ExtraBold = styled.div`
  font-style: italic;
  font-weight: 600;
  font-size: 52px;
`;

const PlayButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  width: 100px;
  height: 100px;
  margin: 24px 0;
`;
const SignUpButton = styled(Button)`
  margin-top: 60px;

  @media (max-width: 425px) {
    display: none !important;
  }
`;

const Home = () => (
  <>
    <Head>
      <title>Центр Ошо Медитаций</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <Base>
        <PlayButton>
          <Image src={Play} alt="Play" />
        </PlayButton>
        <Text>
          <Title>
            <Philosopher>Активные </Philosopher> <Bold>Ошо </Bold> <ExtraBold>медитации</ExtraBold>
          </Title>
          <Subtitle>Присутствуй в каждом моменте </Subtitle>
        </Text>
        <SignUpButton variant="contained" size="large" color="primary">
          Записаться на пробное занятие
        </SignUpButton>
      </Base>
    </Layout>
  </>
);

export default Home;
