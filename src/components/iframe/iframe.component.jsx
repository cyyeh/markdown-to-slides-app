import {
  IframeContainer,
  IframeComponent
} from './iframe.styles'

const Iframe = (props) => {
  const writeHTML = (frame) => {
    if (!frame) {
      return
    }

    let doc = frame.contentDocument
    doc.open()
    doc.write(props.content)
    doc.close()
    frame.style.width = '100%'
    frame.style.height = `${frame.contentWindow.document.body.scrollHeight}px`
  }

  return (
    <IframeContainer>
      <IframeComponent
        title="slide"
        ref={writeHTML}
      />
    </IframeContainer>
  )
}

export default Iframe
