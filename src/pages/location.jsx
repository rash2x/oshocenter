import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Layout from '../App/components/Layout';
import City1 from '../../public/City1.jpg';
import City2 from '../../public/City2.jpg';
import City3 from '../../public/City3.jpg';
import MapIcon from '../../public/mapIcon.svg';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Base = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  align-items: flex-start;
`;

const Text = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #69f0ae;
`;

const Number = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  margin: 4px 0 28px;
`;

const Address = styled.div`
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
`;
const City = styled.div`
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

const Location = () => {
  const latLng = { lat: 59.9407315, lng: 30.3226824 };
  const defaultProps = {
    center: latLng,
    zoom: 14,
    mapId: '7a8e0b60579ebaf9',
    mapTypeControl: false,
    streetViewControl: false,
  };
  return (
    <>
      <Head>
        <title>Как добраться? | Центр Ошо Медитаций</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                <Image src={City1} alt="Location" />
              </LocationImg>
              <LocationImg>
                <Image src={City2} alt="Location" />
              </LocationImg>
              <LocationImg>
                <Image src={City3} alt="Location" />
              </LocationImg>
              <LocationImg>
                <Image src={City1} alt="Location" />
              </LocationImg>
              <LocationImg>
                <Image src={City2} alt="Location" />
              </LocationImg>
              <LocationImg>
                <Image src={City3} alt="Location" />
              </LocationImg>
            </Wrapper>
          </Info>
          <div style={{ height: '518px', width: '420px' }}>
            <GoogleMapReact defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
              <AnyReactComponent lat={59.9407315} lng={30.3226824} icon={MapIcon} />
            </GoogleMapReact>
          </div>
          {/* <Map>
          <Image src={MapImg} alt="Map" />
        </Map> */}
        </Base>
      </Layout>
    </>
  );
};

export default Location;
