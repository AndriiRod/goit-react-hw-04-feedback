import { useState } from 'react';

import Section from 'components/Section/';
import RatingList from 'components/RatingList/';
import Statistics from 'components/Statistics/';

const App = () => {
  const [goodReview, setGoodReview] = useState(0);
  const [neutralReview, setNeutralReview] = useState(0);
  const [badReview, setBadReview] = useState(0);
  const wholeState = [goodReview, neutralReview, badReview];

  const changingStateIncrement = name => {
    switch (name) {
      case 'good':
        setGoodReview(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutralReview(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBadReview(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return wholeState.reduce((acc, currentValue) => acc + currentValue, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return total === 0 ? 0 : Math.round((goodReview / total) * 100);
  };

  const total = countTotalFeedback();
  const percentPositiveRev = countPositiveFeedbackPercentage();

  return (
    <Section title="Please leave feedback">
      <RatingList changingValueState={changingStateIncrement} />
      <Statistics
        state={wholeState}
        total={total}
        percentPositiveRev={percentPositiveRev}
      />
    </Section>
  );
};

export default App;
