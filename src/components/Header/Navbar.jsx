import {useState} from 'react';

import styled from "styled-components";
import Button from "../UI/styledButton";
import Logo from '../../assets/images/logo.svg';
import Hamburger from '../../assets/images/Hamburger.svg'

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

  @media (max-width: 700px) {
		display: none;
	}
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

  @media (max-width: 700px) { 
    display: none;
  }
`;

const LoginBtn = styled.div `
  color: #9e9aa7;
  font-size: 1rem;
  margin: 0 1.5rem;
  cursor: pointer;

  &:active {
		color: #424242;
	}
`
const SignupBtn = styled(Button)`
  padding: 0.5rem 1rem;
  font-size: 1rem;

  @media (max-width: 800px) {
		font-size: 0.9rem;
	}
`;

const HamburgerIcon = styled.img`
  display:none;
  cursor:pointer;
  width: 2rem;

  @media (max-width: 700px) {
    display: block;
  }
`;

const MenuToggleWrapper = styled.div`
  display: flex;
  margin 1rem 0;
  justify-content: center;
	background-color: #3b3054;
  height: 0px;
	border-radius: 8px;
	overflow: hidden;
	transition: height 0.5s ease;

  @media (min-width: 700px) {
		display: none;
	}
	&.show {
		transition: height 0.5s ease;
		height: 22rem;
	}
`;

const NavMenu = styled.div`
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 0rem 2rem;
`;

const NavMenuList = styled.div`
  color: #fff;
  width: fit-content;
  font-size: 1rem;
  margin: 1.8rem auto;
  cursor: pointer;

  &:active {
    color: #BDBDBD;
  }
`;

const BottomLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #9e9aa7;
`;

const MenuLoginBtn = styled(LoginBtn)`
  color: #fff;
  font-size: 1rem;
  margin: 2rem 0rem;

  &:active {
		color: #BDBDBD;
	}
`;

const MenuSignupBtn = styled(SignupBtn)`
    margin: 1.5rem auto;
    padding: 0.8rem 2rem;
`;

const LogoWrapper = styled.img`
  padding: 0.5rem;
  height: 1.5rem;
  width: 6rem;
`;

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = () => {
    if (showMenu) {
      setShowMenu(false);
    }
    else {
      setShowMenu(true);
    }
  };

  return (
    <Wrapper>
      <Nav>
        <LeftPart>
          <LogoWrapper src={Logo} alt="logo"/>
          <OptionList>
            <Option>Features</Option>
            <Option>Pricing</Option>
            <Option>Resources</Option>
          </OptionList>
        </LeftPart>
        <RightPart>
          <LoginBtn>Login</LoginBtn>
          <SignupBtn>SignUp</SignupBtn>
        </RightPart>
        <HamburgerIcon src={Hamburger} alt="hamburger" onClick={toggleMenuHandler} />
      </Nav>
      <MenuToggleWrapper className={showMenu ? 'show' : ''}>
        <NavMenu>
          <NavMenuList>Features</NavMenuList>
          <NavMenuList>Pricing</NavMenuList>
          <NavMenuList>Resources</NavMenuList>
          <BottomLine />
          <MenuLoginBtn>Login</MenuLoginBtn>
          <MenuSignupBtn>SignUp</MenuSignupBtn>
        </NavMenu>
      </MenuToggleWrapper>
    </Wrapper>
  )
}

export default Navbar;