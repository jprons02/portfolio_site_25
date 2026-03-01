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
    name: 'Cow Alert',
    description:
      'A community reporting platform that allows residents to submit stray cattle sightings with required geolocation and photo verification. Images are validated using Google Cloud Vision to ensure submissions contain actual cows before triggering automated email alerts. Built with a scalable serverless architecture.',
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
    name: 'NextJS Blog Website',
    description:
      'A premium headless blog starter built with Next.js, TypeScript, Tailwind CSS, and Contentlayer, featuring custom dark mode, optimized for SEO, and AI-powered MDX post generation using the OpenAI and Pexels APIs.',
    stack: [
      'NextJS',
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
      'This business dashboard was built with a modern Vue 3 stack to demonstrate a full-featured data-driven admin panel using AWS AppSync and DynamoDB with GraphQL.',
    stack: ['Vue', 'Vuetify', 'GraphQL', 'DynamoDB', 'AWS Amplify', 'Vitest'],
    sourceCode: 'https://github.com/jprons02/demo-dashboard',
    livePreview: 'https://staging.dxuossquvgzet.amplifyapp.com/login',
  },
]

export const skills: Record<string, string[]> = {
  frontend: [
    'NextJS',
    'React',
    'Vue',
    'Redux',
    'Context hook',
    'Javascript',
    'Typescript',
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
  ai: ['ChatGPT Plus', 'Github Copilot Pro+', 'Github Spec-kit'],
}

export const contact = {
  email: 'johnsmith@mail.com',
}
