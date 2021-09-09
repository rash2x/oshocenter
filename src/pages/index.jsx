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
  margin: 0;
  font-weight: 600;
  font-size: 56px;
  font-style: italic;
  letter-spacing: -2px;
  
  span {
    font-family: Philosopher;
    font-size: 60px;
  }

  @media (max-width: 900px) {
    font-size: 48px;
    
    span {
      font-size: 52px;
    }
  }
  
  @media (max-width: 600px) {
    font-size: 32px;
    
    span {
      font-size: 36px;
    }
  }
`;

const Subtitle = styled.h2`
  margin-top: 8px;
  font-style: italic;
  font-weight: 600;
  font-size: 32px;

  @media (max-width: 900px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const PlayButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  width: 100px;
  height: 100px;

  margin-bottom: 32px;

  @media (max-width: 600px) {
    margin-bottom: 16px;
  }
`;
const SignUpButton = styled(Button)`
  margin-top: 56px;

  @media (max-width: 600px) {
    margin-top: 40px;
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
          <Title><strong>Активные</strong> <span>Ошо</span> Медитации</Title>
          <Subtitle>Присутствуй в каждом моменте</Subtitle>
        </Text>
        <SignUpButton variant="contained" size="large" color="primary">
          Записаться на пробное занятие
        </SignUpButton>
      </Base>
    </Layout>
  </>
);

export default Home;
