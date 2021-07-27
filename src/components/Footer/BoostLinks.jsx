import styled from "styled-components";
import Button from "../UI/styledButton";
import BoostDesktop from "../../assets/images/bg-boost-desktop.svg";
import BoostMobile from "../../assets/images/bg-boost-mobile.svg";
const Wrapper = styled.div`
padding: 2rem 0;
width: 100%;
color: #fff;
background-color: #3b3054;
background-image: url(${BoostDesktop});
text-align: center;
background-repeat: no-repeat;
background-size: cover;
background-position: center;

@media (max-width: 767px) {
  background-image: url(${BoostMobile});
}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  
  @media (max-width: 700px) {
		margin: 1rem 0;
	}
`;
const Heading = styled.h1`
  font-size: 2.5rem;

  @media (max-width: 700px) {
		font-size: 2rem;
	}
	@media (max-width: 450px) {
		font-size: 1.5rem;
	}
`;

const StartedBtn = styled(Button)`
  padding: 0.8rem 2.6rem;
  font-size: 1.5rem;
`;

const BoostLinks = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Heading>Boost your links today</Heading>
        <StartedBtn>Get Started</StartedBtn>
      </ContentWrapper>
    </Wrapper>
  )
};

export default BoostLinks;