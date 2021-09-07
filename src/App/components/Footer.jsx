import styled from 'styled-components';
import Image from 'next/image';
import Socials from './Socials';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.palette.text.primary};
  padding: 22px 32px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;

const Copyright = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

const Info = styled.div`
  max-width: 690px;
`;
const About = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;
`;

const Address = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    align-items: center;
    justify-content: flex-end;

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
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Info>
      <Copyright>&copy; 2021 Центр Ошо Медитаций</Copyright>
      <About>
        ОШО является зарегистрированной торговой маркой OSHO International Foundation, используемой
        с разрешения Некоторые материалы, используемые здесь (изображения и выдержки из текста),
        защищены авторским правом OSHO International Foundation
      </About>
    </Info>
    <Contacts>
      <Socials />
      <Address>
        Спб, Большая Конюшенная пл. 2В <span>Невский проспект</span>
      </Address>
    </Contacts>
  </FooterWrapper>
);

export default Footer;
