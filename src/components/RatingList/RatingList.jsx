import RatingBtn from 'components/RatingBtn/';

import { Ratings } from './RatingList.styled';

const btnNames = ['good', 'neutral', 'bad'];

const RatingList = ({ changingValueState }) => {
  return (
    <Ratings>
      {btnNames.map(name => {
        return (
          <RatingBtn
            key={name}
            name={name}
            changingValueState={changingValueState}
          />
        );
      })}
    </Ratings>
  );
};

export default RatingList;
