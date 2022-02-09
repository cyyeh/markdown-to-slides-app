import {
  HeadlineContainer,
  HeadlineText,
  SubHeadlineText
} from './headline.styles'

const Headline = () => (
  <HeadlineContainer>
    <HeadlineText variant="h3" component="h3">
      Create and Share slide decks easily
    </HeadlineText>
    <SubHeadlineText variant="h5" component="h5">
      Powered by {' '}
      <a href="https://marpit.marp.app/" target="_blank" rel="noreferrer">
        Marpit: Markdown slide deck framework
      </a>
    </SubHeadlineText>
  </HeadlineContainer>
)

export default Headline
