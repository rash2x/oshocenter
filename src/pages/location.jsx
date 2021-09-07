import Head from 'next/head';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Layout from '../App/components/Layout';
import MapIcon from '../../public/mapIcon.svg';
import Socials from '../App/components/Socials';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Base = styled.div`
  margin-top: 40px;  
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-style: italic;
  align-items: center;
`;

const City = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.theme.palette.primary.main};
`;
const Street = styled.div`
  margin-top: 8px;
  font-size: 24px;
  font-weight: 700;
`;
const Metro = styled.div`
  margin-top: 8px;
  
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;

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

const Phone = styled.a`
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  margin-top: 32px;
  
  color: ${props => props.theme.palette.text.primary};
`;

const Email = styled.div`
  margin-top: 8px;
  font-weight: 700;
`;

const Map = styled.div`
  width: 100%;
  height: 440px;
  
  margin-top: 60px;
  border-radius: 16px;
  overflow: hidden;
`;

const StyledSocials = styled(Socials)`
  margin-top: 32px;
`

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
            <City>Санкт-Петербург</City>
            <Street>Большая Конюшенная пл. 2В</Street>
            <Metro>Метро Невский проспект</Metro>
            <Phone href="tel:+78129220604" target="_blank">+7 (812) 922-06-04</Phone>
            <Email href="tel:i@oshocenter" target="_blank">i@oshocenter.ru</Email>
            <StyledSocials size={40} />
          </Info>
          <Map>
            <GoogleMapReact defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
              <AnyReactComponent lat={59.9407315} lng={30.3226824} icon={MapIcon} />
            </GoogleMapReact>
          </Map>
        </Base>
      </Layout>
    </>
  );
};

export default Location;
