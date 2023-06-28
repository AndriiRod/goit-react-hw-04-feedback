import Notification from 'components/Notification/';
import StatisticsInfo from 'components/StatisticsInfo/';

import { StatisticsWrap, SubTitle } from './Statistics.style';

const Statistics = ({ state, total, percentPositiveRev }) => {
  return (
    <StatisticsWrap>
      <SubTitle>Statistics</SubTitle>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <StatisticsInfo
          state={state}
          total={total}
          percentPositiveRev={percentPositiveRev}
        />
      )}
    </StatisticsWrap>
  );
};

export default Statistics;
