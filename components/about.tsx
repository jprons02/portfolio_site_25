import { Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { about } from '@/lib/portfolio'

export function About() {
  const { name, role, description, resume, social } = about

  return (
    <section className='flex flex-col items-center mt-8 sm:mt-12 text-center'>
      {name && (
        <h1 className='text-4xl sm:text-5xl font-bold text-foreground-alt leading-tight'>
          Hi, I am <span className='text-primary'>{name}.</span>
        </h1>
      )}

      {role && (
        <h2 className='mt-4 text-xl sm:text-2xl text-foreground-alt'>
          A {role}.
        </h2>
      )}

      {description && (
        <p className='mt-6 max-w-[600px] text-base text-foreground text-center sm:text-center'>
          {description}
        </p>
      )}

      <div className='mt-8 flex items-center gap-4'>
        {resume && (
          <Button
            variant='outline'
            asChild
            className='lowercase border-primary text-primary hover:bg-primary hover:text-primary-foreground'
          >
            <a href={resume} target='_blank' rel='noopener noreferrer'>
              Resume
            </a>
          </Button>
        )}

        {social?.github && (
          <a
            href={social.github}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='github'
            className='text-foreground hover:text-primary transition-colors'
          >
            <Github className='h-6 w-6' />
          </a>
        )}

        {social?.linkedin && (
          <a
            href={social.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='linkedin'
            className='text-foreground hover:text-primary transition-colors'
          >
            <Linkedin className='h-6 w-6' />
          </a>
        )}
      </div>
    </section>
  )
}
