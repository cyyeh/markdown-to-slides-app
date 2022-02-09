import {
  LinearProgress
} from '@material-ui/core'

import Iframe from '../iframe/iframe.component'

import {
  SlidePreviewContainer,
} from './slide-preview.styles'

const SlidePreview = ({ htmlContent, loading }) => (
  <SlidePreviewContainer>
    {
      loading && <LinearProgress />
    }
    <Iframe
      content={htmlContent}
    />
  </SlidePreviewContainer>
)

export default SlidePreview
