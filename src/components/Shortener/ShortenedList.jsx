import styled from 'styled-components';
import Button from '../UI/styledButton';

const PreviousUrls = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: space-between;
	background-color: white;
	color: #232127;
	font-size: 1rem;
	border-radius: 8px;
	margin-bottom: 1rem;
	align-items: center;

	@media (max-width: 950px) {
		flex-direction: column;
		text-align: left;
		align-items: flex-start;
	}
`;
const HorizontalRow = styled.div`
	background-color: #bfbfbf;
	display: none;
	width: calc(100% + 2rem);
	height: 1px;
	
	@media (max-width: 950px) {
		display: block;
	}
	margin: 1rem -1rem;
`;

const OriginalUrlWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const OriginalUrl = styled.span`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	@media (max-width: 950px) {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}
`;
const ShortenUrlWrapper = styled.div`
	display: flex;
	cursor: pointer;
	align-items: start;
	justify-content: space-between;

	@media (max-width: 950px) {
		width: 100%;
		flex-direction: column;
		align-items: stretch;
	}
`;
const MultiUrlWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5rem 0.5rem;
	@media (max-width: 950px) {
		padding: 0.4rem 0rem
	}
`;

const ShortenUrl = styled.span`
	color: #2acfcf;

	@media (max-width: 950px) {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}
`;

const CopyUrlButton = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	padding: 0.5rem 1.5rem;
	border-radius: 6px;
	margin-left: 1rem;
	width: 4rem;
	&.copied {
		background-color: #3b3054;
	}
	@media (max-width: 950px) {
		margin-left: 0;
		margin-top: 1rem;
		width: calc(100% - 3rem);
		padding: 0.8rem 1.5rem;
	}
`;

const ShortenedList = props => {
	const [isCopied, setIsCopied] = React.useState(false);

	return (
		<PreviousUrls>
			<OriginalUrlWrapper>
				Orginal URL: 
				<OriginalUrl>{props.orginalUrl}</OriginalUrl>
			</OriginalUrlWrapper>
			<HorizontalRow />
			<ShortenUrlWrapper>
				<MultiUrlWrapper>
					Shrtco.de URL:
					<ShortenUrl
						onClick={e => {
							e.stopPropagation();
							window.open(props.shrinkUrl1, '_blank');
						}}>
						{props.shrinkUrl1}
					</ShortenUrl>
				</MultiUrlWrapper>
				<MultiUrlWrapper>
					Shiny URL:
					<ShortenUrl
						onClick={e => {
							e.stopPropagation();
							window.open(props.shrinkUrl2, '_blank');
						}}>
						{props.shrinkUrl2}
					</ShortenUrl>
				</MultiUrlWrapper>
				<CopyUrlButton
					onClick={e => {
						e.stopPropagation();
						navigator.clipboard.writeText(props.shrinkUrl1);
						setIsCopied(true);

						setTimeout(() => setIsCopied(false), 1000);
					}}
					className={isCopied ? 'copied' : ''}>
					{isCopied ? 'Copied!' : 'Copy'}
				</CopyUrlButton>
			</ShortenUrlWrapper>
		</PreviousUrls>
	);
};

export default ShortenedList;