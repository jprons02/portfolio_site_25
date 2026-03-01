'use client'

import { Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { about } from '@/lib/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: i * 0.2,
    },
  }),
}

export function About() {
  const { name, role, description, resume, social } = about

  return (
    <section className='flex flex-col items-center mt-8 sm:mt-12 text-center'>
      {name && (
        <motion.h1
          className='text-4xl sm:text-5xl font-bold text-foreground-alt leading-tight'
          variants={fadeUp}
          initial='hidden'
          animate='visible'
          custom={0}
        >
          Hi, I am <br className='sm:hidden' />
          <span className='text-primary'>{name}.</span>
        </motion.h1>
      )}

      {role && (
        <motion.h2
          className='mt-4 text-2xl sm:text-3xl font-bold text-foreground-alt'
          variants={fadeUp}
          initial='hidden'
          animate='visible'
          custom={1}
        >
          A {role}.
        </motion.h2>
      )}

      {description && (
        <motion.p
          className='mt-6 max-w-[600px] text-base text-foreground text-center sm:text-center'
          variants={fadeUp}
          initial='hidden'
          animate='visible'
          custom={2}
        >
          {description}
        </motion.p>
      )}

      <motion.div
        className='mt-8 flex items-center gap-4'
        variants={fadeUp}
        initial='hidden'
        animate='visible'
        custom={3}
      >
        {resume && (
          <Button
            variant='outline'
            asChild
            className='lowercase border-primary text-primary hover:bg-primary hover:text-primary-foreground border-2'
          >
            <a href={resume} target='_blank' rel='noopener noreferrer'>
              <span className='font-bold'>Resume</span>
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
            <Github className='h-5 w-5' />
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
            <Linkedin className='h-5 w-5' />
          </a>
        )}
      </motion.div>
    </section>
  )
}
