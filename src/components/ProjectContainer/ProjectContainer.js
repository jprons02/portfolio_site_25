import React from 'react'
import uniqid from 'uniqid'
import { Chip, makeStyles } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const useStyles = makeStyles(() => ({
  chip: {
    margin: '2px',
    color: 'var(--clr-primary)',
    borderColor: 'var(--clr-primary)',
    borderWidth: '1px',
    borderStyle: 'solid',
    transition: 'all 0.2s ease',
    // cursor: 'pointer',
    '&:hover, &:active': {
      backgroundColor: 'var(--clr-primary)',
      color: 'var(--clr-bg)',
    },
    '& .MuiChip-label': {
      backgroundColor: 'transparent',
    },
  },
}))

const ProjectContainer = ({ project }) => {
  const classes = useStyles()

  return (
    <div className='project'>
      <h3>{project.name}</h3>
      <p className='project__description'>{project.description}</p>

      {project.stack && (
        <div className='project__stack'>
          {project.stack.map((item) => (
            <Chip
              key={uniqid()}
              label={item}
              variant='outlined'
              size='small'
              className={classes.chip}
            />
          ))}
        </div>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  )
}

export default ProjectContainer
