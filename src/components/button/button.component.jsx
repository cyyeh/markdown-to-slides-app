import {
  Button
} from '@material-ui/core'

import {
  ButtonContainer
} from './button.styles'

const ButtonComponent = ({ onButtonClick, disabled, children }) => (
  <ButtonContainer>
    <Button 
      variant='contained'
      color='primary'
      disabled={disabled}
      onClick={onButtonClick}
    >
      { children }
    </Button>
  </ButtonContainer>
)

export default ButtonComponent

