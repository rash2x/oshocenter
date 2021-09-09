import { useEffect, useRef } from 'react';
import TRUNK from 'vanta/dist/vanta.trunk.min';

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

const TrunkBackground = styled.div`
  z-index: -1;
  position: absolute;
  top: -270px;
  left: 0;
  right: 0;
  margin: 0 auto;
  
  width: 100%;
  height: 1000px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  opacity: 0.35;

  @media (max-width: 600px) {
    top: -285px
  }
`;

const Home = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const p5 = require('p5');

    const trunkEffect = TRUNK({
      el: elementRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1,
      minWidth: 200,
      minHeight: 200,
      maxWidth: 1000,
      maxHeight: 1000,
      scaleMobile: 1.00,
      color: 0x8600ff,
      backgroundColor: 0xFEF9FF,
      spacing: 1.50,
      chaos: 2.50,
      p5: p5
    })

    return () => {
      trunkEffect.destroy();
    }
  }, [elementRef]);
  return <>
    <Head>
      <title>Центр Ошо Медитаций</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <TrunkBackground ref={elementRef} />
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
};

export default Home;
