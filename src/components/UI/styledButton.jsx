import styled from 'styled-components';

const Button = styled.div`
	background-color: #2acfcf;
	color: white;
	border-radius: 10rem;
	cursor: pointer;
  user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
  -moz-user-select: none;
	-khtml-user-select: none;

	&:active {
		background-color: #9be3e2;
	}
`;

export default Button;