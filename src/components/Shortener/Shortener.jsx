import { useState, useEffect, useRef } from "react";
import  axios from "axios";
import styled from "styled-components";
import { css } from '@emotion/react'
import Button from "../UI/styledButton";
import BarLoader from 'react-spinners/BarLoader';
import validUrl  from 'valid-url';
import ShortenedList from "./ShortenedList";

const UrlShortenerWrapper = styled.section`
	position: relative;
	margin-top: 10rem;
	padding: 8rem 5rem 2rem 5rem;
	background-color: #eff0f6;
	@media (max-width: 700px) {
		padding: 8rem 2rem 2rem 2rem;
	}
`;
const InputWrapper = styled.div`
	background-color: #eff0f6;
	position: absolute;
	width: calc(100% - 18rem);
	background-color: #3b3054;
	background-image: url('/src/assets/images/bg-shorten-desktop.svg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	border-radius: 8px;
	margin-top: -14.5rem;
	display: flex;
	justify-content: space-between;
	padding: 4rem;
	@media (max-width: 700px) {
		background-image: url('/src/assets/images/bg-shorten-mobile.svg');
		width: calc(100% - 8rem);
		margin-top: -15.5rem;
		padding: 2rem;
		flex-direction: column;
	}
`;

const InputContainer = styled.div`
	flex-basis: 80%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;

const ErrorContainer = styled.div`
	left: 4rem;
	position: absolute;
	bottom: 2rem;
	margin-top: 0.5rem;
	width: 80%;
	color: #f46262;
	font-style: italic;

	@media (max-width: 700px) {
		position: relative;
		left: 0;
		bottom: 0;
		width: 100%;
	}
`;

const Input = styled.input`
	height: 3rem;
	font-size: 1.4rem;
	padding: 1rem 2rem;
	border-radius: 8px;
	flex-basis: 80%;
	box-shadow: none;
	border: 2px solid transparent;
	&.error,
	&.error&:focus,
	&.error&:active,
	&.error&:focus-visible {
		border: 2px solid #f46262;
	}
	&.error&::placeholder {
		color: #f46262;
	}
	&:focus,
	&:active,
	&:focus-visible {
		border: 2px solid transparent;
		box-shadow: 0;
		outline: 0 !important;
	}
	@media (max-width: 1250px) {
		font-size: 1.2rem;
		height: 1.5rem;
	}
`;

const ShortenButton = styled(Button)`
	flex-basis: 20%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	font-size: 1.5rem;
	padding: 0 0.5rem;
	border-radius: 8px;
	text-align: center;
	margin-left: 2rem;
	@media (max-width: 1250px) {
		font-size: 1rem;
	}
	@media (max-width: 1000px) {
		font-size: 1rem;
		margin-left: 1rem;
		flex-basis: 30%;
	}
	@media (max-width: 700px) {
		position: relative;
		margin: 1rem 0 0 0;
		padding: 1rem;
		font-size: 1.2rem;
	}
`;

const LoaderOverride = css`
	display: block;
	color: #3b3054;
	margin: 0 auto;
	border-color: red;
`;



const Shortener = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
	const [shortUrls, setShortUrls] = useState([]);

  const shortenUrlRef = useRef(null);

  const validURL = (url) => {
    if (!url) return 'Please add a link';
    if (!validUrl.isUri(url)) return 'Please provide a valid link!';
    return '';
  };
  
	useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, [])

  const shortenUrl = async (url) => {
    setLoading(true);

    const error = validURL(url);
    if (error) {
      setError(error);
      setLoading(false);
    } else {
      setError('');
      try {
        let res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`
        );
        //setShortUrls({...shortUrls, originalUrl: url, links: [full_short_link] });
				setShortUrls([...shortUrls, res.data.result]);
				setLoading(false);
        setUrl('');
				
			} catch (exception) {
        setError('url not supported!');
        setLoading(false);
			}
    }
  }



  console.log(validURL(url))
	console.log(typeof(shortUrls))
	console.log(shortUrls)
	console.log(url)

	return (
    <UrlShortenerWrapper>
      <InputWrapper>
        <InputContainer>
          <Input            
            type="url"
            placeholder="Shorten a link here"
            value={url}
            onChange={e => setUrl(e.target.value)}
            className={`${error ? 'error' : ''}`}
            onKeyDown={e => {
							if (e.key == 'Enter') {
								if (!loading) shortenUrl(url);
                console.log(url);
							}
						}}
             />
          <ErrorContainer style={{ flexDirection: 'column' }}>
            {error}
          </ErrorContainer>
        </InputContainer>
        <ShortenButton
          onClick={() => {
						if (!loading) shortenUrl(url);
					}}
        >
          {loading ? (
						<BarLoader
							loading={loading}
              css={LoaderOverride}
							color='#3b3054'
							size={12}
						/>
					) : (
						'Shorten it!'
					)}
        </ShortenButton>
      </InputWrapper>
			{shortUrls.length ? (
				<div>
						{shortUrls.map((link) => (
							<ShortenedList ref={shortenUrlRef} key={link.code} shrinkUrl1={link.full_short_link} shrinkUrl2={link.short_link3} orginalUrl={link.original_link} />
						))}
				</div>
			): (
				<div></div>
			)}
    </UrlShortenerWrapper>
  );
};

export default Shortener;