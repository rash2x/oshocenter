import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Base = styled.div`
  max-width: 480px;
  text-align: center;
  margin: 120px auto;
`;

const Text = styled.div`
  margin: 24px 0;
  font-size: 16px;
  font-style: italic;
`;


const TryMeditation = () => (
  <Base>
    <Text>Еще не пробовали Ошо медитации? <br/> Запишитесь на бесплатное пробное занятие</Text>
    <Button variant="contained" size="large" color="primary">Записаться на пробное занятие</Button>
    <Text>
      <strong>7336 человек уже попробовали!</strong>
    </Text>
  </Base>
);

export default TryMeditation;
