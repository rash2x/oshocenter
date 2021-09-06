import Image from 'next/image';
import styled from 'styled-components';
import Layout from '../App/components/Layout';
import Play from '../../public/Play.svg';

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
`;

const Text = styled.div``;

const Title = styled.h1`
  display: flex;
  align-items: baseline;
  margin: 0 0 16px 0;
`;

const Subtitle = styled.h1`
  font-family: Montserrat;
  font-style: italic;
  font-weight: 500;
  font-size: 40px;
  margin: 0;
`;

const Philosopher = styled.div`
  font-family: Montserrat;
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
  font-family: Montserrat;
  font-style: italic;
  font-weight: 600;
  font-size: 52px;
`;

const PlayButton = styled.button`
  cursor: pointer;
  background: transparent;
  opacity: 0.6;
  border-radius: 50px;
  border: none;
  width: 100px;
  height: 100px;
  margin: 24px 0;
`;
const SignUpButton = styled.button`
  background: ${props => props.theme.palette.primary.main};
  cursor: pointer;
  border: none;
  border-radius: 24px;
  color: #fff;
  padding: 16px 24px;
  font-family: Montserrat;
  font-style: italic;
  font-weight: 600;
  font-size: 20px;
  outline: none;
`;

const Home = () => (
  <Layout>
    <Base>
      <Text>
        <Title>
          <Philosopher>Активные </Philosopher> <Bold>Ошо </Bold> <ExtraBold>медитации</ExtraBold>
        </Title>
        <Subtitle>Присутствуй в каждом моменте </Subtitle>
      </Text>
      <PlayButton>
        <Image src={Play} alt="Play" />
      </PlayButton>
      <SignUpButton>Записаться на пробное занятие</SignUpButton>
    </Base>
  </Layout>
);

export default Home;
