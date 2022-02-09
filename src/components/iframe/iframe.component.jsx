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
    frame.style.height = '550px'
  }

  return (
    <IframeContainer>
      <IframeComponent
        id="slide-preview"
        title="slide"
        ref={writeHTML}
      />
    </IframeContainer>
  )
}

export default Iframe
