import { Navbar } from '@/components/navbar'
import { About } from '@/components/about'
import { Separator } from '@/components/ui/separator'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function Home() {
  return (
    <div id='top'>
      <Navbar />

      <main className='max-w-[1100px] w-[95%] mx-auto'>
        <About />
        <Separator className='mt-12 max-w-[80%] w-[660px] mx-auto' />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}
