import PropTypes from 'prop-types';

import { Feedback, Widget, Title, Img } from './Section.styled';
import handImg from '../../images/img.png';

const Section = ({ title, children }) => {
  return (
    <Feedback>
      <Widget>
        <Title>{title}</Title>
        <Img src={handImg} alt="hand" />
        {children}
      </Widget>
    </Feedback>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
