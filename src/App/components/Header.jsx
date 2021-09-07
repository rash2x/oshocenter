import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Logo from './Logo';
import { ExpandMoreRounded } from '@material-ui/icons';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.palette.text.primary};
  padding: 16px 20px 16px 10px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

const Nav = styled.nav``;
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

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
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
              <LinkItem href="/location">Как добраться? </LinkItem>
            </ListItem>
          </Ul>
        </Nav>
        <Number>
          <LinkItem href="tel:+78129220604">+7 (812) 922-06-04</LinkItem>
        </Number>
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
    </>
  );
};

export default Header;
