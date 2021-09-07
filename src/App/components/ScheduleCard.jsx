import styled from 'styled-components';

const Base = styled.div`
  transition: ${props => props.theme.transitions.create(['background', 'box-shadow'], {
    duration: props.theme.transitions.duration.short,
    easing: props.theme.transitions.easing.easeInOut
  })};
  flex: 1;
  position: relative;

  background: ${props => props.background};
  border-left: 1px solid ${props => props.theme.palette.divider};
  border-bottom: 1px solid ${props => props.theme.palette.divider};

  min-width: 220px;
  max-width: 240px;
  height: 220px;
  color: ${props => props.theme.palette.text.primary};
  display: flex;
  flex-direction: column;
  padding: 16px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: ${props => props.theme.shadows[24]};
    z-index: 2;
  }
`;

const Type = styled.div`
  font-size: 14px;
  color: ${props => props.color};
`;

const Title = styled.div`
  margin-top: 8px;
  height: 104px;

  line-height: 1.25em;
  font-family: ${props => props.fontFamily ? props.fontFamily : 'inherit'};
  color: ${props => props.color};
  font-style: italic;
  font-weight: 600;
  font-size: ${props => props.fontSize ? props.fontSize : '20px'};
`;

const Time = styled.div`
  margin-top: 4px;
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
`;
const Date = styled.div`
  font-style: italic;
  font-weight: 600;
  font-size: 14px;
`;

const ScheduleCard = ({
                        title,
                        type,
                        time,
                        date,
                        background,
                        typeColor,
                        titleColor,
                        titleFontFamily,
                        titleFontSize,
                        isEvent
                      }) => (
  <Base background={background}>
    <Type color={typeColor}>{type}</Type>
    <Title color={titleColor} fontFamily={titleFontFamily} fontSize={titleFontSize}>{title}</Title>
    {isEvent ? <>
      <Time>{date}</Time>
      <Date>{time}</Date>
    </> : <>
      <Date>{date}</Date>
      <Time>{time}</Time>
    </>}

  </Base>
);

export default ScheduleCard;
