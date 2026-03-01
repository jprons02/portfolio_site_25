import { Github, ExternalLink } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { projects, type Project } from '@/lib/portfolio'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className='flex flex-col text-center transition-transform duration-200 hover:-translate-y-2'>
      <CardHeader>
        <CardTitle className='text-xl'>{project.name}</CardTitle>
      </CardHeader>

      <CardContent className='flex-1 space-y-4'>
        <CardDescription className='text-sm leading-relaxed'>
          {project.description}
        </CardDescription>

        {project.stack.length > 0 && (
          <div className='flex flex-wrap justify-center gap-1.5'>
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                variant='outline'
                className='border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-xs'
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className='justify-center gap-4'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='source code'
            className='text-foreground hover:text-primary transition-colors'
          >
            <Github className='h-5 w-5' />
          </a>
        )}
        {project.livePreview && (
          <a
            href={project.livePreview}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='live preview'
            className='text-foreground hover:text-primary transition-colors'
          >
            <ExternalLink className='h-5 w-5' />
          </a>
        )}
      </CardFooter>
    </Card>
  )
}

export function Projects() {
  if (!projects.length) return null

  return (
    <section id='projects' className='mt-16 sm:mt-20'>
      <h2 className='text-center text-2xl font-bold uppercase mb-8 text-foreground-alt'>
        Projects
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto'>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
