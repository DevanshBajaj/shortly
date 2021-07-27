import styled from "styled-components";
import AboutImage from "../../assets/images/illustration-working.svg";
import Button from "../UI/styledButton";

const Wrapper = styled.div`
  padding: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media (max-width: 700px) {
    padding: 1rem 0;
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  order: 1;
  flex-basis: 50%;

  @media (max-width: 700px) {
		order: 2;
		margin: 0 2rem;
		text-align: center;
	}
`;


const Heading = styled.h1`
  color: #232127;
  font-size: 4.6rem;
  font-weight: bold;
  line-height: 5.5rem;
  margin: 0;

  @media (max-width: 1280px) {
		font-size: 4rem;
		line-height: 4.5rem;
	}
	@media (max-width: 1000px) {
		font-size: 3rem;
		line-height: 3.6rem;
	}
	@media (max-width: 450px) {
		font-size: 2.5rem;
		line-height: 3rem;
	}
`;

const SubHeading = styled.h3`
  color: #9e9aa7;
  font-weight: 600;
  width: 60%;

  @media (max-width: 1280px) {
		font-size: 1.1rem;
		width: 60%;
	}
	@media (max-width: 1000px) {
		font-size: 1rem;
		width: 70%;
	}
	@media (max-width: 700px) {
		font-size: 1.1rem;
		width: 100%;
	}
	@media (max-width: 450px) {
		font-size: 1rem;
	}
`;
const GetStartedbtn = styled(Button)`
  padding: 0.8rem 2.6rem;
  width: fit-content;
  
  @media (max-width: 700px) {
    padding: 0.6rem 2.4rem;
		margin: 1rem auto;
		font-size: 1.25rem;
	}
`;

const ImgWrapper = styled.div`
  order: 2;
  margin-right: -20rem;

  @media (max-width: 1280px) {
		margin-right: -14rem;
	}
	@media (max-width: 700px) {
		margin-right: -22rem;
		order: 1;
	}
	@media (max-width: 450px) {
		margin-right: -12rem;
		order: 1;
	}

`;

const AboutImg = styled.img`
  width: 44rem;

  @media (max-width: 1280px) {
		width: 35rem;
	}
	@media (max-width: 1000px) {
		width: 28rem;
	}
	@media (max-width: 700px) {
		width: 45rem;
		margin-bottom: 2rem;
	}
	@media (max-width: 450px) {
		width: 30rem;
	}
`;

const About = () => {

  return (
    <Wrapper>
      <ContentWrapper>
        <Heading>More than just shorter links</Heading>
        <SubHeading>Build your own brand's recognition and get detailed insights on how your links are performing. </SubHeading>
        <GetStartedbtn>Get Started</GetStartedbtn>
      </ContentWrapper>
      <ImgWrapper>
        <AboutImg src={AboutImage} alt="About Image" />
      </ImgWrapper>
    </Wrapper>
  );

};

export default About;