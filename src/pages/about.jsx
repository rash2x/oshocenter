import styled from 'styled-components';
import Layout from '../App/components/Layout';
import Reviews from '../App/components/Reviews';

const Title = styled.h1`
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  letter-spacing: -0.04em;
  color: #fff;
  width: 70%;
  margin: 0 auto;
`;
const Green = styled.span`
  color: #2bbd7e;
`;
const Orange = styled.span`
  color: #ff6e40;
`;
const Rose = styled.span`
  color: #f50057;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 185px;
`;
const InfoCard = styled.div`
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  max-width: 330px;
`;
const CardTitle = styled.p`
  letter-spacing: -0.04em;
  margin-bottom: ${props => props.theme.spacing(2)}px;
`;
const CardText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const About = () => (
  <Layout size="lg">
    <Title>
      Активные Ошо Медитации помогают <Green>прийти в чувства</Green>,
      <Orange> избавиться от эмоционального груза</Orange> и <Rose>наполниться энергией</Rose>
    </Title>
    <Info>
      <InfoCard>
        <CardTitle>
          Более <br /> 16 разных медитаций
        </CardTitle>
        <CardText>
          Каждая медитация нацелена на конкретную прокачку. Где-то мы центрируемся, где избавляемся
          от блоков, где-то смеемся целый час а где-то сидим в тишине
        </CardText>
      </InfoCard>
      <InfoCard>
        <CardTitle>Только оригинальная подача</CardTitle>
        <CardText>
          Все медитации соблюдают оригинальные инструкции и музыку, созданные Ошо и его командой.
          Инструкторы получают сертификаты и потом только ведут медитации.
        </CardText>
      </InfoCard>
      <InfoCard>
        <CardTitle>
          Возможность быть <br /> тотальным
        </CardTitle>
        <CardText>
          В медитациях есть инструкции, но нет правил. Вы можете свободно выражать свои чувства.
          Громко кричать или смеяться, плакать или признаваться в любви.
        </CardText>
      </InfoCard>
    </Info>
    <Reviews />
  </Layout>
);

export default About;
