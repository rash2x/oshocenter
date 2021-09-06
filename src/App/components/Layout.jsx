import { Container } from '@material-ui/core';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children, size = 'md' }) => (
  <Base>
    <Header />
    <Container maxWidth={size}>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'spring' }}
        className="
          flex flex-col items-start w-full pt-10
          px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
          pt-24 h-full"
      >
        {children}
      </motion.main>
    </Container>
    <Footer />
  </Base>
);

export default Layout;
