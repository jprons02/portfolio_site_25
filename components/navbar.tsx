'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { header, projects, skills, contact } from '@/lib/portfolio'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const hasProjects = projects.length > 0
  const hasSkills = Object.values(skills).some((arr) => arr.length > 0)
  const hasContact = !!contact.email

  const navLinks = [
    ...(hasProjects ? [{ href: '#projects', label: 'projects' }] : []),
    ...(hasSkills ? [{ href: '#skills', label: 'skills' }] : []),
    ...(hasContact ? [{ href: '#contact', label: 'contact' }] : []),
  ]

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <header className='flex h-24 max-w-[1100px] w-[95%] mx-auto items-center justify-between sm:h-32'>
      <h3 className='text-2xl font-bold'>
        <Link
          href={header.homepage}
          className='text-foreground relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-primary after:transition-all hover:after:w-full'
        >
          {header.title}
        </Link>
      </h3>

      <nav className='flex items-center'>
        {/* Desktop nav */}
        <ul className='hidden sm:flex items-center gap-6 mr-6'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='text-foreground font-medium lowercase relative pb-0 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          variant='ghost'
          size='icon'
          onClick={toggleTheme}
          aria-label='toggle theme'
        >
          <Moon className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Sun className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </Button>

        {/* Mobile hamburger */}
        <Button
          variant='ghost'
          size='icon'
          className='sm:hidden ml-2'
          onClick={() => setOpen(!open)}
          aria-label='toggle navigation'
        >
          {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
        </Button>
      </nav>

      {/* Mobile nav overlay */}
      {open && (
        <div className='fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-background sm:hidden'>
          <Button
            variant='ghost'
            size='icon'
            className='absolute top-6 right-6'
            onClick={() => setOpen(false)}
            aria-label='close navigation'
          >
            <X className='h-6 w-6' />
          </Button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className='text-xl font-medium lowercase text-foreground relative pb-0 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full'
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
