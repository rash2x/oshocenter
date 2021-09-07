import React  from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Logo from './Logo';
import { ExpandMoreRounded, MenuRounded } from '@material-ui/icons';
import { Collapse, Drawer, IconButton, List, MenuItem, Menu } from '@material-ui/core';

const HeaderWrapper = styled.header`
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

const PhoneSubList = styled(PhoneList)`
  li {
    a {
      padding-left: 32px;
    }
  }
`;

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [phoneListOpen, setPhoneListOpen] = React.useState(false);

  const handleToggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const handleClick = event => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePhoneListToggle = () => {
    setPhoneListOpen(!phoneListOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <LinkItem href="/">
          <Logo />
        </LinkItem>
        <Nav>
          <Ul>
            <ListItem onClick={handleClick} onMouseOver={handleClick}>
              О медитациях
              <ExpandMoreRounded fontSize={'small'} />
            </ListItem>
            <ListItem>
              <LinkItem href="/schedule">Расписание </LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="/subscription">Стоимость </LinkItem>
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
      <Menu
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleClose}>
          <LinkItem href="/about" onClick={handleClose}>
            О медитациях
          </LinkItem>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkItem href="/about" onClick={handleClose}>
            О Центре
          </LinkItem>
        </MenuItem>
      </Menu>
      <Drawer anchor={'top'} open={drawerOpen} onClose={handleToggleDrawer(false)}>
        <PhoneList component="nav" aria-label="main mailbox folders">
          <ListItem onClick={handlePhoneListToggle}>
            О медитациях
            <ExpandMoreRounded fontSize={'small'} />
          </ListItem>
          <Collapse in={phoneListOpen} timeout="auto" unmountOnExit>
            <PhoneSubList component="div" disablePadding>
              <ListItem>
                <LinkItem href="/about" onClick={handlePhoneListToggle}>
                  О медитациях
                </LinkItem>
              </ListItem>
              <ListItem>
                <LinkItem href="/about" onClick={handlePhoneListToggle}>
                  О Центре
                </LinkItem>
              </ListItem>
            </PhoneSubList>
          </Collapse>
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
    </>
  );
};

export default Header;
