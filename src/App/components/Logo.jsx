import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import LogoImage from '../../../public/Logo.svg';

const LogoIcon = styled(Image)`
  width: 135px;
  height: 52px;
  cursor: pointer;
`;

const Logo = () => (
  <Link href="/">
    <LogoIcon src={LogoImage} alt="Logo" />
  </Link>
);

export default Logo;
