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
    'Full-stack web developer with 10+ years of experience, including 5 years specializing in building scalable applications using React and AWS. Skilled in designing, developing, and deploying modern web solutions.',
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
    name: 'Dashboard Demo',
    description:
      'This business dashboard was built with a modern Vue 3 stack to demonstrate a full-featured data-driven admin panel using AWS AppSync and DynamoDB with GraphQL.',
    stack: ['Vue', 'Vuetify', 'GraphQL', 'DynamoDB', 'AWS Amplify', 'Vitest'],
    sourceCode: 'https://github.com/jprons02/demo-dashboard',
    livePreview: 'https://staging.d1olp46bqvs6ps.amplifyapp.com/login',
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
