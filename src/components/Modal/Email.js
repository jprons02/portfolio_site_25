// Import core React hooks and context
import { useState, useContext } from 'react'
// Import Material-UI components
import { Modal, Backdrop, Fade, TextField, makeStyles } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
// Import theme context
import { ThemeContext } from '../../contexts/theme'
// API key
import keys from '../../keys'
// Custom styles for the form
import FormStyles from './FormStyles'
// Snackbar components for success and error messages
import SuccessSnackbar from '../Common/SuccessSnackbar'
import ErrorSnackbar from '../Common/ErrorSnackbar'
// Utility function to send email
import sendEmail from '../../utils/sendEmail'

// Hook for generating class names from FormStyles
const useStyles = makeStyles(FormStyles)

const EmailModal = ({ trigger }) => {
  // Read current theme from context (must be first hook in the component)
  const [{ themeName }] = useContext(ThemeContext)
  const classes = useStyles()

  // Modal open state
  const [open, setOpen] = useState(false)
  // Form input state
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  // Loading spinner state
  const [loadingState, setLoadingState] = useState(false)
  // Snackbar states
  const [successOpen, setSuccessOpen] = useState(false)
  const [errorOpen, setErrorOpen] = useState(false)

  // Reset all form fields
  const resetInputs = () => {
    setForm({ name: '', email: '', message: '' })
  }

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target
    // Limit each input to 5000 characters
    setForm((prev) => ({
      ...prev,
      [name]: value.slice(0, 5000),
    }))
  }

  // Submit form handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoadingState(true)

    // Callback to handle success or error response
    const callback = (value) => {
      setLoadingState(false)
      if (value === 'error') {
        setErrorOpen(true) // Show error toast
      } else {
        setSuccessOpen(true) // Show success toast
        setOpen(false) // Close the modal
      }
      resetInputs() // Reset form fields
    }

    try {
      // Send form data to email API
      const response = await sendEmail({
        name: form.name,
        email: form.email,
        message: form.message,
        apiKey: keys.portfolioSiteAPI,
      })

      const result = await response.json()

      // Decide whether to call success or error handler
      if (response.ok && result) {
        callback()
      } else {
        callback('error')
      }
    } catch (error) {
      console.error('Fetch error:', error)
      callback('error')
    }
  }

  return (
    <>
      {/* Trigger element (usually a button) */}
      <span
        role='button'
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen(true)}
        style={{ display: 'inline-block' }}
      >
        {trigger}
      </span>

      {/* Material-UI Modal with fade transition and backdrop */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className={`${classes.paper} ${themeName} app`}>
            <h2 className='section__title'>Contact Me</h2>

            {/* Contact form */}
            <form onSubmit={handleSubmit}>
              <TextField
                label='Name'
                name='name'
                inputProps={{ maxLength: 5000 }}
                fullWidth
                required
                variant='outlined'
                value={form.name}
                onChange={handleChange}
                className={classes.formField}
              />
              <TextField
                label='Email'
                name='email'
                inputProps={{ maxLength: 5000 }}
                fullWidth
                required
                variant='outlined'
                value={form.email}
                onChange={handleChange}
                className={classes.formField}
              />
              <TextField
                label='Message'
                name='message'
                inputProps={{ maxLength: 5000 }}
                fullWidth
                required
                multiline
                minRows={3}
                variant='outlined'
                value={form.message}
                onChange={handleChange}
                className={classes.formField}
              />

              {/* Submit button */}
              <button
                type='submit'
                disabled={loadingState}
                className='btn btn--outline'
                style={{ textAlign: 'center', width: '100%' }}
              >
                send
              </button>

              {/* Loading spinner overlay */}
              {loadingState && (
                <CircularProgress
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    left: '50%',
                    marginTop: '-36px',
                    marginLeft: '-12px',
                    color: 'white',
                    backgroundColor: 'transparent',
                  }}
                  size={24}
                />
              )}
            </form>
          </div>
        </Fade>
      </Modal>

      {/* Success and Error toasts */}
      <SuccessSnackbar
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        message='Message sent successfully!'
      />
      <ErrorSnackbar
        open={errorOpen}
        onClose={() => setErrorOpen(false)}
        message='Error sending message. Please try again later.'
      />
    </>
  )
}

export default EmailModal
