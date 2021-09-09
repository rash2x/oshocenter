import React  from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Logo from './Logo';
import { MenuRounded } from '@material-ui/icons';
import { Drawer, IconButton, List } from '@material-ui/core';

const HeaderWrapper = styled.header`
  background: rgba(254, 249, 255, 0.65);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.palette.text.primary};
  padding: 16px 20px 16px 20px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

const Nav = styled.nav`
  @media (max-width: 960px) {
    display: none;
  }
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  cursor: pointer;
`;
const ListItem = styled.li`
  margin: 0 16px;

  a {
    color: ${props => props.theme.palette.text.primary};
    text-decoration: none;
    transition: 0.3s all;
    padding: 8px;

    &:hover {
      color: #b388ff;
    }
  }

  svg {
    margin-left: 4px;
  }

  &:first-child {
    display: flex;
    align-items: center;
  }
`;
const LinkItem = styled(Link)``;

const Number = styled.div`
  a {
    color: ${props => props.theme.palette.text.primary};
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s all;
    padding: 8px;

    font-size: 16px;

    &:hover {
      color: #b388ff;
    }

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`;

const MenuButton = styled(IconButton)`
  display: none !important;

  @media (max-width: 960px) {
    display: block !important;
  }
`;

const PhoneList = styled(List)`
  li {
    height: 40px;
    display: flex;
    align-items: center;
    
    a {
      height: 40px;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0;
      flex: 1;
    }
  }
`;

const PhoneLocation = styled.div`
  background: #F0E2F3;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 14px;
  font-weight: 600;
  font-style: italic;

  @media (max-width: 960px) {
    font-size: 12px;
  }
`;

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleToggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <header>
      <PhoneLocation>
        📍 Спб, Большая Конюшенная пл. 2В
      </PhoneLocation>
      <HeaderWrapper>
        <LinkItem href="/">
          <Logo />
        </LinkItem>
        <Nav>
          <Ul>
            <ListItem>
              <LinkItem href="/about">О медитациях</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="/schedule">Расписание</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="/subscription">Стоимость</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="/location">Контакты</LinkItem>
            </ListItem>
          </Ul>
        </Nav>
        <Number>
          <LinkItem href="tel:+78129220604">+7 (812) 922-06-04</LinkItem>
        </Number>
        <MenuButton color="inherit" aria-label="menu" onClick={handleToggleDrawer(true)}>
          <MenuRounded />
        </MenuButton>
      </HeaderWrapper>
      <Drawer anchor={'top'} open={drawerOpen} onClose={handleToggleDrawer(false)}>
        <PhoneList component="nav" aria-label="main mailbox folders">
          <ListItem>
            <LinkItem href="/about">О медитациях</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem href="/schedule">Расписание</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem href="/subscription">Стоимость</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem href="/location">Контакты</LinkItem>
          </ListItem>
        </PhoneList>
      </Drawer>
    </header>
  );
};

export default Header;
