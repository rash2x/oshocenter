import { Container } from '@material-ui/core';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Layout = ({ children, size = 'md' }) => (
  <Base>
    <Header />
    <Container maxWidth={size}>{children}</Container>
    <Footer />
  </Base>
);

export default Layout;
