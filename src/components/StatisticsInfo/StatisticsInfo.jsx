import { InfoList } from './StatisticsInfo.styled';
import PropTypes from 'prop-types';

const StatisticsInfo = ({ state, total, percentPositiveRev }) => {
  const { good, neutral, bad } = state;
  return (
    <InfoList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {percentPositiveRev}%</li>
    </InfoList>
  );
};

export default StatisticsInfo;

StatisticsInfo.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};
