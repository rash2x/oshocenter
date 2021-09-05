import Image from 'next/image';
import styled from 'styled-components';
import Man from '../../../public/Man.jpg';

const Card = styled.div`
  max-width: 690px;
  font-family: Philosopher;
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: flex-end;
`;
const Avatar = styled.div`
  div {
    width: 91px;
    height: 91px;
    display: block;
    border: none;
    border-radius: 100%;
  }
  margin-right: ${props => props.theme.spacing(3)}px;
`;
const ReviewWrapper = styled.div``;
const Text = styled.p`
  &:before {
    content: '“';
    position: absolute;
    top: -35px;
    left: -85px;
    font-family: Philosopher;
    font-style: italic;
    font-weight: bold;
    font-size: 120px;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 0.36);
  }
`;
const Author = styled.div`
  font-size: 20px;
  color: ${props => props.theme.palette.primary.main};
  margin: 24px 0 8px;
`;
const Job = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.54);
`;

const Review = () => (
  <Card>
    <Avatar>
      <Image src={Man} alt="Man" />
    </Avatar>
    <ReviewWrapper>
      <Text>
        Я наконец-то стала собой. Чувствовать вкус кофе, видеть солнечные лучи, танцевать без
        причины! Как я жила раньше?
      </Text>
      <Author>Юлия, 22 года</Author>
      <Job>Тестировщик в IT</Job>
    </ReviewWrapper>
  </Card>
);

export default Review;
