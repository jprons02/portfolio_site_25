'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { skills } from '@/lib/portfolio'

const categories = [
  { key: 'frontend', label: 'Front End' },
  { key: 'backend', label: 'Back End' },
  { key: 'cloud', label: 'Cloud' },
  { key: 'ai', label: 'AI' },
] as const

export function Skills() {
  const [category, setCategory] = useState<string>('frontend')

  const currentSkills = skills[category] ?? []
  if (!currentSkills.length) return null

  return (
    <section id='skills' className='mt-16 sm:mt-20'>
      <h2 className='text-center text-2xl font-bold uppercase mb-4 text-foreground-alt'>
        Skills
      </h2>

      {/* Category tabs */}
      <div className='flex justify-center gap-2 mb-10'>
        {categories.map(({ key, label }) => (
          <button
            key={key}
            type='button'
            onClick={() => setCategory(key)}
            className={cn(
              'relative px-3 py-2 text-[14px] md:text-base font-semibold text-foreground transition-colors cursor-pointer uppercase',
              'after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-primary after:origin-left after:transition-transform',
              category === key ? 'after:scale-x-100' : 'after:scale-x-0',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Skills list */}
      <div className='min-h-[170px] sm:min-h-[88px]'>
        <ul className='flex flex-wrap justify-center gap-2 max-w-[600px] mx-auto'>
          {currentSkills.map((skill) => (
            <li
              key={skill}
              className='px-4 py-2 text-sm font-medium bg-card shadow-sm rounded-md hover:-translate-y-1 transition-transform'
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
