const FormStyles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'var(--clr-bg)',
    borderRadius: '8px',
    padding: theme.spacing(4),
    width: '90%',
    maxWidth: 500,
    boxShadow: theme.shadows[5],
    outline: 'none',
  },
  formField: {
    marginBottom: theme.spacing(2),
    '& .MuiFormLabel-root': {
      color: 'var(--clr-fg)',
    },
    '& .Mui-error': {
      color: '#f44336',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--clr-fg)',
      },
      '&:hover fieldset': {
        borderColor: 'var(--clr-primary)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--clr-primary)',
      },
      '&.Mui-error fieldset': {
        borderColor: '#f44336',
      },
    },
    '& input, & textarea': {
      zIndex: 1,
      color: 'var(--clr-fg);',
    },
  },
})

export default FormStyles
