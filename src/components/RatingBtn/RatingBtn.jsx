import { Btn } from './RatingBtn.styled';
import PropTypes from 'prop-types';

const RatingBtn = ({ name, changingValueState }) => {
  return (
    <li>
      <Btn type="button" onClick={() => changingValueState(name)}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Btn>
    </li>
  );
};

export default RatingBtn;

RatingBtn.propTypes = {
  changingValueState: PropTypes.func,
};
