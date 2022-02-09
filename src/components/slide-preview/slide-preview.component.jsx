import Iframe from '../iframe/iframe.component'

import {
  SlidePreviewContainer,
} from './slide-preview.styles'

const SlidePreview = ({ htmlContent }) => (
  <SlidePreviewContainer>
    <Iframe
      content={htmlContent}
    />
  </SlidePreviewContainer>
)

export default SlidePreview
