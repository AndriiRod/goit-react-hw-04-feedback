import styled from '@emotion/styled';

export const Btn = styled.button`
  padding: 8px 18px;

  font-family: inherit;

  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 12px;
  color: #ffffff;

  transition: box-shadow 250ms linear;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;
