import { InfoList } from './StatisticsInfo.styled';
import PropTypes from 'prop-types';

const StatisticsInfo = ({ state, total, percentPositiveRev }) => {
  const [goodReview, neutralReview, badReview] = state;
  return (
    <InfoList>
      <li>Good: {goodReview}</li>
      <li>Neutral: {neutralReview}</li>
      <li>Bad: {badReview}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {percentPositiveRev}%</li>
    </InfoList>
  );
};

export default StatisticsInfo;

StatisticsInfo.propTypes = {
  state: PropTypes.arrayOf(PropTypes.number),
};
