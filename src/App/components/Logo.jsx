import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import LogoImage from '../../../public/Osho-logotype.svg';
import CardLogo from '../../../public/CardLogo.svg';

const LogoIcon = styled(Image)`
  width: 103px;
  cursor: pointer;
`;

const Logo = ({ inverse }) => (
  <Link href="/">
    <LogoIcon src={!inverse ? LogoImage : CardLogo} alt="Logo" />
  </Link>
);

export default Logo;
