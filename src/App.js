import { useState, useEffect } from 'react'

import {
  AppContainer,
  RowContainer
} from './App.styles'
import Headline from './components/headline/headline.component'
import ButtonComponent from './components/button/button.component'
import MarkdownEditor from './components/markdown-editor/markdown-editor.component'
import SlidePreview from './components/slide-preview/slide-preview.component'
import MobileScreen from './components/mobile-screen/mobile-screen.component'
import {
  generateSlide
} from './apis/generateSlide'

const App = () => {
  const [markdownText, setMarkdownText] = useState('# Hi! This is the first page! \n\n---\n\n# This is the second page!')
  const [slideHtmlContent, setSlideHtmlContent] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (markdownText) {
      setLoading(true)
      generateSlide(markdownText)
        .then(response => {
          setSlideHtmlContent(response)
          setLoading(false)
        })
    } else {
      setSlideHtmlContent('')
      setLoading(false)
    }
  }, [markdownText])

  const handleChangeMarkdownText = (value) => {
    setMarkdownText(value)
  }

  const handleDownloadPDF = () => {
    function setPrint(slidePreviewElement) {
      slidePreviewElement.contentWindow.__container__ = this
      slidePreviewElement.contentWindow.focus() // Required for IE
      slidePreviewElement.contentWindow.print()
    }

    if (slideHtmlContent) {
      const slidePreviewElement = document.getElementById('slide-preview')
      setPrint(slidePreviewElement)
    }
  }

  return (
    window.innerWidth > 800 ?
    <AppContainer>
      <Headline />
      <ButtonComponent
        disabled={!slideHtmlContent}
        onButtonClick={handleDownloadPDF}>
        Save to PDF
      </ButtonComponent>
      <RowContainer>
        <MarkdownEditor 
          markdownText={markdownText}
          onChangeMarkdownText={handleChangeMarkdownText}
        />
        <SlidePreview
          htmlContent={slideHtmlContent}
          loading={loading}
        />
      </RowContainer>
    </AppContainer>
    :
    <MobileScreen />
  )
}

export default App
