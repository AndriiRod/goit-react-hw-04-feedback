import styled from '@emotion/styled';
export const Feedback = styled.section`
  display: grid;
  place-items: center;

  padding-top: 50px;
`;

export const Widget = styled.div`
  position: relative;
  width: 455px;
  height: 300px;
  padding: 20px 30px;

  background: #926dfa;
  box-shadow: -6px -6px 35px rgba(145, 202, 254, 0.5),
    6px 6px 35px rgba(145, 202, 254, 0.5);
  border-radius: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 24px;

  font-size: 36px;
  font-weight: 500;
  line-height: 1.36;
  color: #ffffff;
`;

export const Img = styled.img`\
  position: absolute;
  top:40px;
  left:-70px;


  width: 260px;
  height: 260px;

  z-index: 5;
`;
