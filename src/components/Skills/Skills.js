import React, { useState } from 'react'
import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  const [category, setCategory] = useState('frontend')

  const currentSkills = skills[category] || []

  if (!currentSkills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title' style={{ marginBottom: '16px' }}>
        Skills
      </h2>

      <div className='skills__toggle'>
        <button
          type='button'
          onClick={() => setCategory('frontend')}
          className={`skills__toggle-btn ${
            category === 'frontend' ? 'active' : ''
          }`}
        >
          <h2 className='section__title'>Front End</h2>
        </button>
        <button
          type='button'
          onClick={() => setCategory('backend')}
          className={`skills__toggle-btn ${
            category === 'backend' ? 'active' : ''
          }`}
        >
          <h2 className='section__title'>Back End</h2>
        </button>
        <button
          type='button'
          onClick={() => setCategory('tools')}
          className={`skills__toggle-btn ${
            category === 'tools' ? 'active' : ''
          }`}
        >
          <h2 className='section__title'>Tools</h2>
        </button>
      </div>

      <ul className='skills__list'>
        {currentSkills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
