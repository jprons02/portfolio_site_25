import React from 'react'
import { Snackbar, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const SuccessSnackbar = ({ open, onClose, message = 'Success!' }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    open={open}
    autoHideDuration={4000}
    onClose={onClose}
    message={message}
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

export default SuccessSnackbar
