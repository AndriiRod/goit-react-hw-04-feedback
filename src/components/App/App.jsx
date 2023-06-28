import React, { Component } from 'react';

import Section from 'components/Section/';
import RatingList from 'components/RatingList/';
import Statistics from 'components/Statistics/';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changingValueState = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((this.state.good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const percentPositiveRev = this.countPositiveFeedbackPercentage();
    return (
      <Section title="Please leave feedback">
        <RatingList
          btnNames={Object.keys(this.state)}
          changingValueState={this.changingValueState}
        />
        <Statistics
          state={this.state}
          total={total}
          percentPositiveRev={percentPositiveRev}
        />
      </Section>
    );
  }
}

export default App;
