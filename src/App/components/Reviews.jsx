import styled from 'styled-components';
import Image from 'next/image';
import Avatar1 from '../../../public/Avatar1.jpg';
import Avatar2 from '../../../public/Avatar2.jpg';
import Avatar3 from '../../../public/Avatar3.jpg';

const Title = styled.h2`
  text-align: center;
`;

const Wrapper = styled.div`
  min-height: 700px;
  position: relative;
`;

const Card = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.width}px;
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
    top: -30px;
    left: 40px;
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

const Reviews = () => (
  <>
    <Title>Что говорят люди о медитациях Ошо?</Title>
    <Wrapper>
      <Card width="510" top="20%" left="8%">
        <Avatar>
          <Image src={Avatar2} alt="avatar" />
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
      <Card width="510" top="10%" left="57%">
        <Avatar>
          <Image src={Avatar1} alt="avatar" />
        </Avatar>
        <ReviewWrapper>
          <Text>Избавился от эмоционального груза. Стал более стойким и восприимчивым.</Text>
          <Author>Дима, 36 лет</Author>
          <Job>Бизнесмен</Job>
        </ReviewWrapper>
      </Card>
      <Card width="690" top="60%" left="25%">
        <Avatar>
          <Image src={Avatar3} alt="avatar" />
        </Avatar>
        <ReviewWrapper>
          <Text>
            Ох, начинать утро с динамической медитации, это каждый день понимать себя больше и
            больше!
          </Text>
          <Author>Максим, 28 лет</Author>
          <Job>Строитель</Job>
        </ReviewWrapper>
      </Card>
    </Wrapper>
  </>
);

export default Reviews;
