import { Github, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { projects, type Project } from '@/lib/portfolio'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
      {/* Accent top bar */}
      <div className='h-1 bg-primary' />

      <div className='flex flex-1 flex-col p-6'>
        {/* Title */}
        <h3 className='text-lg font-bold text-card-foreground'>
          {project.name}
        </h3>

        {/* Description */}
        <p className='mt-3 text-[12px] leading-relaxed text-foreground flex-1'>
          {project.description}
        </p>

        {/* Tech stack */}
        {project.stack.length > 0 && (
          <div className='mt-4 flex flex-wrap gap-1.5'>
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                variant='secondary'
                className='text-[11px] font-medium bg-muted text-muted-foreground'
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Footer links */}
      <div className='flex items-center gap-5 border-t border-border px-6 py-4'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors'
          >
            <Github className='h-3.5 w-3.5' />
            Source
          </a>
        )}
        {project.livePreview && (
          <a
            href={project.livePreview}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors'
          >
            <ExternalLink className='h-3.5 w-3.5' />
            Live Demo
          </a>
        )}
      </div>
    </div>
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
