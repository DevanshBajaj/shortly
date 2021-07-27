import styled from "styled-components";
import BrandLogo from '../../assets/images/icon-brand-recognition.svg';
import DetailedRecords from '../../assets/images/icon-detailed-records.svg';
import FullyCustomizable from '../../assets/images/icon-fully-customizable.svg';

const Wrapper = styled.div`
  background-color: #eff0f6;
  text-align: center;
  padding: 4rem 8rem;
  padding-bottom: 8rem;

  @media (max-width: 768px) {
    padding: 2rem 4rem;
    padding-bottom: 6rem;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color:#232127;

  @media (max-width: 768px) {
		font-size: 1.8rem;
	}
`;
const SubHeading = styled.h4`
  color: #9e9aa7;
	font-weight: 500;
  font-size: 1.2rem;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-top: 8rem;
  @media (max-width: 1000px) {
		flex-direction: column;
	}
`;
const CyanLine = styled.div`
  background-color: #2acfcf;
  position: absolute;
  top: 45%;
  width: 40%;
  height: 0.5rem;
  border-radius: 0.3rem;

  @media (max-width: 1000px) {
		width: 35rem;
		top: 30rem;
		left: 50%;
		transform: translateX(-50%) rotate(90deg);
	}
	@media (max-width: 500px) {
		width: 50rem;
		top: 30rem;
	}
	@media (max-width: 350px) {
		width: 60rem;
		top: 50rem;
	}

  @media (max-width: 320px) {
		width: 40rem;
		top: 30rem;
	}

`;

const StatsCard = styled.div`
  position: relative;
  margin: 0 1rem;
  text-align: left;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 8px 4px rgba(191,191,191,0.12);
	-webkit-box-shadow: 0px 0px 8px 4px rgba(191,191,191,0.12);
	-moz-box-shadow: 0px 0px 8px 4px rgba(191,191,191,0.12);
  min-width: 200px;
  max-width: 300px;
  height: fit-content;
  border-radius: 0.4rem;
  background-color: white;
  padding: 1.5rem;

  @media (max-width: 1000px) {
		max-width: none;
		width: auto;
		text-align: center;
		margin: 0;
	}
	&#second {
		margin-top: 4rem;
		@media (max-width: 1000px) {
			margin-top: 6rem;
		}
	}
	&#third {
		margin-top: 8rem;
		@media (max-width: 1000px) {
			margin-top: 6rem;
		}
	}
	h4 {
		margin-top: 2.5rem;
		font-size: 1.2rem;
		margin-bottom: 0;
	}
	p {
		font-size: 1rem;
		line-height: 1.7rem;
		color: #939398;
	}
`;

const ImageWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -2.4rem;
  left: 1.4rem;
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  background-color: #3b3054;

  img {
		width: 1.8rem;
	}

	@media (max-width: 1000px) {
		left: 50%;
		transform: translateX(-50%);
	}
`;


const Stats = () => {

  return (
    <Wrapper>
      <Heading>Advanced Statistics</Heading>
      <SubHeading>Track how your links are performing across the web with our advanced statistics dashboard.</SubHeading>
      <StatsWrapper>
          <CyanLine />
          <StatsCard>
            <ImageWrapper>
              <img src={BrandLogo} alt="Logo" />
            </ImageWrapper>
            <h4>Brand Recognition</h4>

            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content.
            </p>
          </StatsCard>
          <StatsCard id="second">
            <ImageWrapper>
              <img src={DetailedRecords} alt="Logo" />
            </ImageWrapper>
            <h4>Detailed Records</h4>

            <p>
              Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
            </p>
          </StatsCard>
          <StatsCard id="third">
            <ImageWrapper>
              <img src={FullyCustomizable} alt="Logo" />
            </ImageWrapper>
            <h4>Fully Customizable</h4>

            <p>
              Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
            </p>
          </StatsCard>
      </StatsWrapper>
    </Wrapper>

  )
};

export default Stats;