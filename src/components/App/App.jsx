import { useState } from 'react';

import Section from 'components/Section/';
import RatingList from 'components/RatingList/';
import Statistics from 'components/Statistics/';

const App = () => {
  const [goodReview, setGoodReview] = useState(0);
  const [neutralReview, setNeutralReview] = useState(0);
  const [badReview, setBadReview] = useState(0);

  const wholeState = [goodReview, neutralReview, badReview];
  const total = countTotalFeedback();
  const percentPositiveRev = countPositiveFeedbackPercentage();

  const changingStateIncrement = name => {
    switch (name) {
      case 'good':
        setGoodReview(prevGoodReview => prevGoodReview + 1);
        break;
      case 'neutral':
        setNeutralReview(prevNeutralReview => prevNeutralReview + 1);
        break;
      case 'bad':
        setBadReview(prevBadReview => prevBadReview + 1);
        break;
      default:
        break;
    }
  };

  function countTotalFeedback() {
    return wholeState.reduce((acc, currentValue) => acc + currentValue, 0);
  }

  function countPositiveFeedbackPercentage() {
    return total === 0 ? 0 : Math.round((goodReview / total) * 100);
  }

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
