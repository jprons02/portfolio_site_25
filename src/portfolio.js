const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Joseph Ronselli',
  role: 'Full Stack Web Developer',
  description:
    'Full-stack developer with 10+ years of web development experience, specializing in React, Node.js, and AWS, with broad expertise across modern frameworks, tools, and architectures.',
  resume:
    'https://drive.google.com/file/d/19LXx_SgS2KuuHdWPmHFWsVumUgRRGq9W/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/joseph-ronselli/',
    github: 'https://github.com/jprons02',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Blog Starter Kit',
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
    ],
    sourceCode: 'https://github.com/jprons02/blog-starter',
    livePreview: 'https://main.d24q1reagwj6w8.amplifyapp.com/',
  },
  {
    name: 'Dashboard Demo',
    description:
      'This business dashboard was built with a modern Vue 3 stack to demonstrate a full-featured data-driven admin panel using AWS AppSync and DynamoDB with GraphQL.',
    stack: ['Vue', 'Vuetify', 'GraphQL', 'DynamoDB', 'AWS Amplify', 'Vitest'],
    sourceCode: 'https://github.com/jprons02/demo-dashboard',
    livePreview: 'https://staging.dxuossquvgzet.amplifyapp.com/login',
  },
  {
    name: 'React Website',
    description:
      'This website was built using React and Material UI with a serverless AWS backend (Lambda, API Gateway, S3, CloudFront, SES) and integrates the Mailchimp API for marketing automation.',
    stack: [
      'React',
      'Material UI',
      'Mailchimp API',
      'S3',
      'Cloudfront',
      'Lambda',
      'API Gateway',
      'SES',
    ],
    sourceCode: 'https://github.com/jprons02/micc-react',
    livePreview: 'https://staging.d2uj4k1n7yskfo.amplifyapp.com/',
  },
  {
    name: 'Utility App',
    description:
      'This utility app, built with the MERN stack and styled with Semantic UI React, allows login-based updates to the jackpots page, integrates with the Dropbox API for media access, and displays Google Analytics reports.',
    stack: [
      'React',
      'Redux',
      'NodeJS',
      'Express',
      'MongoDB',
      'Dropbox API',
      'Semantic UI React',
    ],
    sourceCode: 'https://github.com/jprons02/mapa',
    // livePreview: 'https://github.com',
  },
]

const skills = {
  frontend: [
    'React',
    'Redux',
    'Context API',
    'Vue',
    'Javascript',
    'TypeScript',
    'HTML',
    'CSS',
    'SASS',
    'Material UI',
    'Vuetify',
    'Semantic UI',
    'Bootstrap',
  ],
  backend: [
    'Node.js',
    'Express',
    'SQL',
    'GraphQL',
    'MongoDB',
    'DynamoDB',
    'AWS Lambda',
    'AWS API Gateway',
    'AWS Appsync',
    'AWS Amplify',
    'AWS S3',
    'AWS Cloudfront',
    'AWS SES',
  ],
  tools: [
    'Git',
    'Vitest',
    'VS Code',
    'Postman',
    'Figma',
    'Chrome Developer Tools',
    'SQL Developer',
    'Adobe Photoshop',
    'Wordpress',
    'Wix',
  ],
}

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
