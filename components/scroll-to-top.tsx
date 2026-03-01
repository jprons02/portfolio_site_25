'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <Button
      variant='ghost'
      size='icon'
      asChild
      className='fixed bottom-8 right-8 hidden md:flex text-foreground hover:text-primary'
    >
      <a href='#top' aria-label='scroll to top'>
        <ArrowUp className='h-6 w-6' />
      </a>
    </Button>
  )
}
