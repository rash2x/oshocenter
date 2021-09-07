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
  hidden: { opacity: -1 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
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
        transition={{ type: 'orchestration', delay: 0.2, ease: [0.17, 0.67, 0.83, 0.67] }}
      >
        {children}
      </motion.main>
    </Container>
    <Footer />
  </Base>
);

export default Layout;
