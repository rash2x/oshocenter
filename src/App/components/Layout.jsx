import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Layout = ({ children }) => (
  <Base>
    <Header />
    {children}
    <Footer />
  </Base>
);

export default Layout;
