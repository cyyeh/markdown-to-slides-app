import {
  HeadlineContainer,
  HeadlineText,
  SubHeadlineText
} from './headline.styles'

const Headline = () => (
  <HeadlineContainer>
    <HeadlineText>
      Create and Share slide decks easily
    </HeadlineText>
    <SubHeadlineText>
      Powered by {' '}
      <a href="https://marpit.marp.app/" target="_blank" rel="noreferrer">
        Marpit: Markdown slide deck framework
      </a>
    </SubHeadlineText>
  </HeadlineContainer>
)

export default Headline
