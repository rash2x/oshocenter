import styled from 'styled-components';
import Footer from '../App/components/Footer';
import Header from '../App/components/Header';

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Home = () => (
  <Base>
    <Header />
    <Footer />
  </Base>
);

export default Home;
