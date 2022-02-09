import { useState, useEffect } from 'react'

import {
  AppContainer,
  RowContainer
} from './App.styles'
import Headline from './components/headline/headline.component'
import MarkdownEditor from './components/markdown-editor/markdown-editor.component'
import SlidePreview from './components/slide-preview/slide-preview.component'
import {
  generateSlide
} from './apis/generateSlide'

const App = () => {
  const [markdownText, setMarkdownText] = useState('# Hi! This is the first page! \n\n---\n\n# This is the second page!')
  const [slideHtmlContent, setSlideHtmlContent] = useState('')

  useEffect(() => {
    if (markdownText) {
      generateSlide(markdownText)
        .then(response => setSlideHtmlContent(response))
    }
  }, [markdownText])

  const handleChangeMarkdownText = (value) => {
    setMarkdownText(value)
  }

  return (
    <AppContainer>
      <Headline />
      <RowContainer>
        <MarkdownEditor 
          markdownText={markdownText}
          onChangeMarkdownText={handleChangeMarkdownText}
        />
        <SlidePreview htmlContent={slideHtmlContent} />
      </RowContainer>
    </AppContainer>
  )
}

export default App
