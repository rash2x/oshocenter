import Link from 'next/link';
import Vk from '../../../public/vkIcon.svg';
import Instagram from '../../../public/instagramIcon.svg';
import Telegram from '../../../public/telegramIcon.svg';
import styled, { css } from 'styled-components';
import Image from 'next/image';

const IconWrapper = styled.div`
  margin-left: 16px;
  
  &:first-child {
    margin-left: 0;
  }
`;

const Base = styled.div`
  display: flex;

  img {
    width: 32px;
  }
  
  ${props => props.size === 'large' && css`
    ${IconWrapper} {
      margin-left: 20px;
      
      &:first-child {
        margin-left: 0;
      }
    }
    
    
    img {
      width: 40px;
    }
  `}
`;


const Socials = ({ size, ...rest }) => {
  return (
    <Base size={size} {...rest}>
      <IconWrapper>
        <Link href="/">
          <Image src={Telegram} />
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href="/">
          <Image src={Instagram} />
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link href="/">
          <Image src={Vk} />
        </Link>
      </IconWrapper>
    </Base>
  )
}

export default Socials;
