import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import Arrow from '../../../public/arrowDown.svg';

const HeaderWrapper = styled.header`
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

const Nav = styled.nav``;
const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  list-style: none;
  cursor: pointer;
`;
const ListItem = styled.li`
  margin: 0 40px;

  a {
    color: #fff;
    text-decoration: none;
  }
  &:first-child {
    display: flex;
    align-items: center;
  }
`;
const ArrowImg = styled(Image)``;
const LinkItem = styled(Link)``;

const Number = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Nav>
      <Ul>
        <ListItem>
          <LinkItem href="/">О медитациях</LinkItem>
          <ArrowImg src={Arrow} />
        </ListItem>
        <ListItem>
          <LinkItem href="/schedule">Расписание </LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem href="/subscription">Стоимость </LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem href="/location">Как добраться? </LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem href="/about">About </LinkItem>
        </ListItem>
      </Ul>
    </Nav>
    <Number>
      <LinkItem href="tel:+78129220604">+7 (812) 922-06-04</LinkItem>
    </Number>
  </HeaderWrapper>
);

export default Header;
