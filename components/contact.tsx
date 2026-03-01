'use client'

import { useState, type FormEvent } from 'react'
import { Loader2 } from 'lucide-react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contact } from '@/lib/portfolio'
import { sendEmail } from '@/lib/send-email'

export function Contact() {
  if (!contact.email) return null

  return (
    <section id='contact' className='mt-16 sm:mt-20 flex flex-col items-center'>
      <h2 className='text-center text-2xl font-bold uppercase mb-8 text-foreground-alt'>
        Contact
      </h2>

      <EmailDialog />
    </section>
  )
}

function EmailDialog() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{
    type: 'success' | 'error'
    msg: string
  } | null>(null)

  const resetForm = () => setForm({ name: '', email: '', message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setToast(null)

    try {
      const res = await sendEmail(form)
      const data = await res.json()

      if (res.ok && data) {
        setToast({ type: 'success', msg: 'Message sent successfully!' })
        setOpen(false)
      } else {
        setToast({
          type: 'error',
          msg: 'Error sending message. Please try again later.',
        })
      }
    } catch {
      setToast({
        type: 'error',
        msg: 'Error sending message. Please try again later.',
      })
    } finally {
      setLoading(false)
      resetForm()
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            className='lowercase border-primary text-primary hover:bg-primary hover:text-primary-foreground border-2'
          >
            <span className='font-bold'>Email me</span>
          </Button>
        </DialogTrigger>

        <DialogContent className='sm:max-w-[500px]'>
          <DialogHeader>
            <DialogTitle className='text-center text-2xl uppercase'>
              Contact Me
            </DialogTitle>
            <DialogDescription className='text-center'>
              Fill out the form below and I&apos;ll get back to you.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className='space-y-4 mt-2'>
            <Input
              placeholder='Name'
              name='name'
              required
              maxLength={5000}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              placeholder='Email'
              name='email'
              type='email'
              required
              maxLength={5000}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Textarea
              placeholder='Message'
              name='message'
              required
              rows={4}
              maxLength={5000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button
              type='submit'
              disabled={loading}
              className='w-full lowercase'
            >
              {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              send
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Simple toast */}
      {toast && (
        <div
          role='alert'
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-md text-sm font-medium shadow-lg transition-opacity ${
            toast.type === 'success'
              ? 'bg-green-600 text-white'
              : 'bg-red-600 text-white'
          }`}
        >
          {toast.msg}
          <button
            onClick={() => setToast(null)}
            className='ml-4 font-bold hover:opacity-70'
            aria-label='close'
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}
