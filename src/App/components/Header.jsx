import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Arrow from '../../../public/arrowDown.svg';
import Logo from './Logo';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 22px 32px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;

const Nav = styled.nav``;
const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  list-style: none;
  cursor: pointer;
`;
const ListItem = styled.li`
  margin: 0 40px;

  a {
    color: #fff;
    text-decoration: none;
    transition: 0.3s all;
    padding: 8px;

    &:hover {
      color: #b388ff;
    }
  }
  &:first-child {
    display: flex;
    align-items: center;
  }
`;
const ArrowImg = styled(Image)``;
const LinkItem = styled(Link)``;

const Dropdown = styled(Menu)``;

const Number = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s all;
    padding: 8px;

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
    <HeaderWrapper>
      <LinkItem href="/">
        <Logo />
      </LinkItem>
      <Nav>
        <Ul>
          <ListItem onClick={handleClick} onMouseOver={handleClick}>
            О медитациях
            <ArrowImg src={Arrow} />
          </ListItem>

          <Dropdown
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
                О медитациях
              </LinkItem>
            </MenuItem>
          </Dropdown>
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
  );
};

export default Header;
