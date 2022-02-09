import {
  Typography
} from '@material-ui/core'
import styled from 'styled-components'

export const HeadlineContainer = styled.div`
  text-align: center;
`

export const HeadlineText = styled(Typography)`
  margin-top: 50px;
  margin-bottom: 10px;
  font-weight: bold;
  color: darkgray;
  font-size: 55px;
`
export const SubHeadlineText = styled(Typography)`
  margin-bottom: 50px;
  font-weight: bold;

  a {
    text-decoration: none;
    color: yellow;
  }

  a:hover {
    color: orange;
  }
`
