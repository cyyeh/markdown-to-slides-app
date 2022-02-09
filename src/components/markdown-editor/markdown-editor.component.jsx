import MDEditor from '@uiw/react-md-editor'
import rehypeSanitize from 'rehype-sanitize'

import {
  MarkdownEditorContainer
} from './markdown-editor.styles'

const MarkdownEditor = ({ markdownText, onChangeMarkdownText }) => (
  <MarkdownEditorContainer>
    <MDEditor
      value={markdownText}
      onChange={onChangeMarkdownText}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
      height={550}
      preview='edit'
    />
  </MarkdownEditorContainer>
)

export default MarkdownEditor
