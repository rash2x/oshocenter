import styled from 'styled-components';
import Review from './Review';
import Avatar1 from '../../../public/Avatar1.jpg';
import Avatar2 from '../../../public/Avatar2.jpg';
import Avatar3 from '../../../public/Avatar3.jpg';

const Title = styled.h2`
  text-align: center;
`;

const Wrapper = styled.div``;

const ReviewsInfo = [
  {
    id: 1,
    text: 'Я наконец-то стала собой. Чувствовать вкус кофе, видеть солнечные лучи, танцевать без причины! Как я жила раньше?',
    author: 'Юлия, 22 года',
    job: 'Тестировщик в IT',
    avatar: Avatar2,
  },
  {
    id: 2,
    text: 'Избавился от эмоционального груза. Стал более стойким и восприимчивым. ',
    author: 'Дима, 36 лет',
    job: 'Бизнесмен',
    avatar: Avatar1,
  },
  {
    id: 3,
    text: 'Ох, начинать утро с динамической медитации, это каждый день понимать себя больше и больше!',
    author: 'Максим, 28 лет',
    job: 'Строитель',
    avatar: Avatar3,
  },
];

const Reviews = () => (
  <>
    <Title>Что говорят люди о медитациях Ошо?</Title>
    <Wrapper>
      {ReviewsInfo.map(item => (
        <Review key={item.id} {...item} />
      ))}
    </Wrapper>
  </>
);

export default Reviews;
