import styled from 'styled-components';
import Socials from './Socials';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: ${props => props.theme.palette.text.primary};
  padding: 16px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  @media (max-width: 960px) {
    align-items: center;
    flex-direction: column-reverse;
    text-align: center;
  }
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

  @media (max-width: 425px) {
    margin-top: 12px;
  }
  div {
    @media (max-width: 425px) {
      margin-top: 12px;
    }
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;

  @media (max-width: 600px) {
    margin-bottom: 16px;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Info>
      <Copyright>&copy; 2021 Центр Ошо Медитаций</Copyright>
      <About>
        ОШО является зарегистрированной торговой маркой OSHO International Foundation, используемой
        с разрешения
        <div>
          Некоторые материалы, используемые здесь (изображения и выдержки из текста), защищены
          авторским правом OSHO International Foundation
        </div>
      </About>
    </Info>
    <Contacts>
      <Socials />
    </Contacts>
  </FooterWrapper>
);

export default Footer;
