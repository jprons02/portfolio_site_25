import { Snackbar, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import PropTypes from 'prop-types'

const ErrorSnackbar = ({ open, onClose, message }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    open={open}
    autoHideDuration={4000}
    onClose={onClose}
    message={message}
    ContentProps={{
      style: { backgroundColor: '#d32f2f', color: '#fff' },
    }}
    action={
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={onClose}
      >
        <CloseIcon fontSize='small' />
      </IconButton>
    }
  />
)

ErrorSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
}

export default ErrorSnackbar
