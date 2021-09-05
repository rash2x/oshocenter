import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Vk from '../../../public/vkIcon.svg';
import Inst from '../../../public/InstIcon.svg';
import Telegram from '../../../public/TelegamIcon.svg';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 22px 32px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;

const Copyright = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

const Info = styled.div`
  max-width: 690px;
`;
const About = styled.p`
  font-family: Montserrat;
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
const Socials = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Icon = styled(Image)``;
const IconWrapper = styled.div`
  margin-right: 24px;
  cursor: pointer;

  &:last-child {
    margin: 0;
  }
`;

const Address = styled.div`
  font-family: Montserrat;
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
      <Socials>
        <IconWrapper>
          <Link href="/">
            <Icon src={Vk} />
          </Link>
        </IconWrapper>
        <IconWrapper>
          <Link href="/">
            <Icon src={Inst} />
          </Link>
        </IconWrapper>
        <IconWrapper>
          <Link href="/">
            <Icon src={Telegram} />
          </Link>
        </IconWrapper>
      </Socials>
      <Address>
        Спб, Большая Конюшенная пл. 2В <span>Невский проспект</span>
      </Address>
    </Contacts>
  </FooterWrapper>
);

export default Footer;
