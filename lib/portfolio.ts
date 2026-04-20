export const header = {
  homepage: '/',
  title: 'JS.',
}

export const about = {
  name: 'Joseph Ronselli',
  role: 'Full Stack Web Developer',
  description:
    'Full-stack Web Developer with 10+ years of experience, leveraging AI-assisted development workflows to accelerate architecture design, testing, refactoring, and documentation. Specializes in cloud-native systems and scalable web platforms using modern JavaScript frameworks.',
  resume:
    'https://drive.google.com/file/d/19LXx_SgS2KuuHdWPmHFWsVumUgRRGq9W/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/joseph-ronselli/',
    github: 'https://github.com/jprons02',
  },
}

export interface Project {
  name: string
  description: string
  stack: string[]
  sourceCode?: string
  livePreview?: string
}

export const projects: Project[] = [
  {
    name: 'Next.js Reporting Platform',
    description:
      'Community platform for reporting stray cattle sightings with geolocation, photo verification via Google Cloud Vision, and automated email alerts.',
    stack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Google Cloud Vision API',
      'Email Automation',
      'OpenStreetMap',
      'Vercel',
    ],
    sourceCode: 'https://github.com/jprons02/lp-cow-alert',
    livePreview: 'https://wholetthecowsout.com/',
  },
  {
    name: 'Next.js Blog Website',
    description:
      'Headless blog starter with custom dark mode, SEO optimization, and AI-powered MDX post generation using OpenAI and Pexels APIs.',
    stack: [
      'Next.js',
      'Tailwind CSS',
      'AWS Amplify CI/CD',
      'TypeScript',
      'Contentlayer2',
      'OpenAI API',
      'Pexels API',
      'Federal Poverty Guidelines API',
    ],
    sourceCode: 'https://github.com/jprons02/blog-starter',
    livePreview: 'https://www.mygovblog.com/',
  },
  {
    name: 'Vue Dashboard Demo',
    description:
      'Data-driven admin dashboard built with Vue 3, AWS AppSync, and DynamoDB to demonstrate a full-featured business panel.',
    stack: ['Vue', 'Vuetify', 'GraphQL', 'DynamoDB', 'AWS Amplify', 'Vitest'],
    sourceCode: 'https://github.com/jprons02/demo-dashboard',
    livePreview: 'https://staging.dxuossquvgzet.amplifyapp.com/login',
  },
]

export const skills: Record<string, string[]> = {
  frontend: [
    'Next.js',
    'React',
    'Vue',
    'Redux',
    'Context hook',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Shadcn UI',
    'Material UI',
    'Bootstrap',
  ],
  backend: ['NodeJS', 'SQL', 'PLSQL', 'GraphQL', 'Supabase'],
  cloud: [
    'AWS Lambda',
    'AWS API Gateway',
    'AWS EC2',
    'AWS Amplify',
    'AWS S3',
    'AWS SES',
    'AWS DynamoDB',
    'Vercel',
  ],
  ai: ['Claude', 'ChatGPT', 'Cursor', 'Github Copilot', 'Github Spec-kit'],
}

export const contact = {
  email: 'johnsmith@mail.com',
}
