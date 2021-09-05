import styled from 'styled-components';
import Review from './Review';

const Title = styled.h2`
  text-align: center;
`;

const Wrapper = styled.div``;

const Reviews = () => (
  <>
    <Title>Что говорят люди о медитациях Ошо?</Title>
    <Wrapper>
      <Review />
      <Review />
      <Review />
    </Wrapper>
  </>
);

export default Reviews;
