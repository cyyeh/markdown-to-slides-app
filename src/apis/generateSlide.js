const apiEndpoint = (
  process.env.NODE_ENV === 'production' ?
  process.env.REACT_APP_BACKEND_API_ENDPOINT :
  '/'
)

export const generateSlide = async (markdownText) => {
  let response = await fetch(`${apiEndpoint}slides`, {
    method: 'POST',
    body: JSON.stringify({'markdown': markdownText}),
    headers: {
      'content-type': 'text/html; charset=UTF-8'
    }
  })
  response = await response.text()
  return response
}