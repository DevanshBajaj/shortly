import styled from "styled-components";
import Button from "./UI/styledButton";
import Logo from '../assets/images/logo.svg';

const Wrapper = styled.div`
  margin: 0 5rem;
  font-weight: 600;
  padding-top: 2rem;
  
  @media (max-width: 700px) {
		margin: 0 2rem;
	}
`;

const Nav = styled.section`
  display: flex;
  justify-content: space-between;
`;

const LeftPart = styled.div`
  display: flex;
  flex-direction: row;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 1rem;

`;

const Option = styled.div`
  margin: 0 1rem;
  display: flex;
  color: #9e9aa7;
  cursor: pointer;
  font-size: 1rem;

	&:active {
		color: black;
	}

  @media (max-width: 800px) {
		font-size: 0.9rem;
		margin: 0 0.6rem;
	}
`;

const RightPart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;


`;

const LoginBtn = styled.div `
  color: #9e9aa7;
  font-size: 1rem;
  margin: 0 1.5rem;

  &:active {
		color: #424242;
	}
`
const SignupBtn = styled(Button)`
  padding: 0.5rem 1rem;
  font-size: 1rem;

`;

const Navbar = () => {

  return (
    <Wrapper>
      <Nav>
        <LeftPart>
          <img src={Logo} alt="dlogo"/>
          <OptionList>
            <Option>Features</Option>
            <Option>Features</Option>
            <Option>Features</Option>
          </OptionList>
        </LeftPart>
        <RightPart>
          <LoginBtn>Login</LoginBtn>
          <SignupBtn>SignUp</SignupBtn>
        </RightPart>
      </Nav>
    </Wrapper>
  )
}

export default Navbar;