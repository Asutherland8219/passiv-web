import styled from '@emotion/styled';

// Forms, inputs, buttons

export const Form = styled.form`
  max-width: 500px;
`;

export const Input = styled.input`
  border: 2px solid var(--brand-grey);
  box-sizing: border-box;
  font-size: 20px;
  height: 38px;
  padding: 25px;
  border-radius: 0;
  width: 100%;
  outline: none;
  margin-bottom: 20px;
  -webkit-appearance: none;
  &:focus {
  	border: 2px solid var(--brand-blue-hover);
  }
`;

export const Label = styled.label`
	display: block;
	font-size: 20px;
	font-weight: 600;
	text-align: left;
	color: #2c2c2c;
	margin-bottom: 12px;
`;

export const Submit = styled.button`
  background-color: #003BA2;
  border: none;
  color: white;
  padding: 15px;
  margin: 5px;
`;
