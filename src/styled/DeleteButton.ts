import styled from '@emotion/styled';

export const DeleteButton = styled.button`
  background-color: ${props => (props.disabled ? '#dddddd' : '#dc3545')};
  border: none;
  color: white;
  padding: 14px 18px 16px;
  margin: 5px;
`;