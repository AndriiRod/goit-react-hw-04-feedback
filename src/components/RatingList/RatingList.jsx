import PropTypes from 'prop-types';
import RatingBtn from 'components/RatingBtn/';

import { Ratings } from './RatingList.styled';

const RatingList = ({ btnNames, changingValueState }) => {
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

Ratings.propTypes = {
  btnNames: PropTypes.arrayOf(PropTypes.string),
};
