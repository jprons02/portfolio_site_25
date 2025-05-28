import { contact } from '../../portfolio'
import EmailModal from '../Modal/Email'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>

      <EmailModal
        trigger={
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        }
      />
    </section>
  )
}

export default Contact
