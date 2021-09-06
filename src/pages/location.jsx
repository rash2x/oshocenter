import Image from 'next/image';
import styled from 'styled-components';
import Layout from '../App/components/Layout';
import CityImg from '../../public/City.jpg';
import MapImg from '../../public/Map.jpg';

const Base = styled.div`
  display: flex;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  align-items: flex-start;
  margin-right: 90px;
`;

const Text = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #69f0ae;
`;

const Number = styled.a`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  color: #fff;
  margin: 4px 0 28px;
`;

const Address = styled.div`
  font-family: Montserrat;
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
`;
const City = styled.div`
  color: rgba(255, 255, 255, 0.72);
  font-size: 14px;
  margin: 16px 0 4px;
`;
const Street = styled.div`
  font-size: 24px;
  margin-bottom: ${props => props.theme.spacing(1)}px; ;
`;
const Metro = styled.div`
  font-style: normal;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing(5)}px;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    display: block;
    background: #2196f3;
    border: none;
    border-radius: 50%;
    margin-right: ${props => props.theme.spacing(1)}px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LocationImg = styled.div`
  margin-top: ${props => props.theme.spacing(1)}px;
  div {
    border-radius: ${props => props.theme.spacing(1)}px;
    width: 140px;
    height: 120px;
  }
`;

const Map = styled.div`
  div {
    border-radius: ${props => props.theme.spacing(2)}px;
    height: 100%;
  }
`;

const Location = () => (
  <Layout>
    <Base>
      <Info>
        <Text>Позвоните, если возникли вопросы как добраться</Text>
        <Number>+7 (812) 922-06-04</Number>
        <Address>
          <Text>Основной адрес</Text>
          <City>191186, Санкт-Петербург</City>
          <Street>Большая Конюшенная пл. 2В</Street>
          <Metro>Метро Невский проспект</Metro>
        </Address>
        <Wrapper>
          <LocationImg>
            <Image src={CityImg} alt="Location" />
          </LocationImg>
          <LocationImg>
            <Image src={CityImg} alt="Location" />
          </LocationImg>
          <LocationImg>
            <Image src={CityImg} alt="Location" />
          </LocationImg>
          <LocationImg>
            <Image src={CityImg} alt="Location" />
          </LocationImg>
          <LocationImg>
            <Image src={CityImg} alt="Location" />
          </LocationImg>
          <LocationImg>
            <Image src={CityImg} alt="Location" />
          </LocationImg>
        </Wrapper>
      </Info>
      <Map>
        <Image src={MapImg} alt="Map" />
      </Map>
    </Base>
  </Layout>
);

export default Location;
