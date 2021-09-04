import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import LogoImage from '../../../public/Logo.svg';
import CardLogo from '../../../public/CardLogo.svg';

const LogoIcon = styled(Image)`
  width: 135px;
  height: 52px;
  cursor: pointer;
`;

const Logo = ({ inverse }) => (
  <Link href="/">
    <LogoIcon src={!inverse ? LogoImage : CardLogo} alt="Logo" />
  </Link>
);

export default Logo;
