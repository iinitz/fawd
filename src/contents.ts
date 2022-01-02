export const groups = [
  'chap0',
  'chap1',
  'chap2',
  'chap3',
  'chap4',
  'chap5',
  'chap6',
  'project',
] as const
export const slugs = [
  'introduction',
  'outline',
  'score',
  'web1',
  'web2',
  'web3',
  'tools',
  'html-css',
  'javascript',
  'typescript',
  'react',
  'component',
  'props-state',
  'hooks',
  'deploy',
  'graphql',
  'jwt',
  'https',
  'password',
  'midterm',
  'final',
] as const

export type Group = typeof groups[number]
export type Slug = typeof slugs[number]
export type Pages = {
  [x in Slug]: {
    title: string
    group: Group
  }
}
export type Menus = {
  [x in Group]: string
}

export const pages: Pages = {
  introduction: { title: 'Introduction', group: 'chap0' },
  outline: { title: 'Course outline', group: 'chap0' },
  score: { title: 'Score', group: 'chap0' },
  web1: { title: 'History of web', group: 'chap1' },
  web2: { title: 'Current web technologies', group: 'chap1' },
  web3: { title: 'Future of web', group: 'chap1' },
  tools: { title: 'Web developer tools', group: 'chap2' },
  'html-css': { title: 'Basic web (HTML, CSS)', group: 'chap2' },
  javascript: { title: 'JavaScript', group: 'chap2' },
  typescript: { title: 'TypeScript', group: 'chap2' },
  react: { title: 'Basic React', group: 'chap3' },
  component: { title: 'Component', group: 'chap3' },
  'props-state': { title: 'Props &amp; State', group: 'chap3' },
  hooks: { title: 'Hooks', group: 'chap3' },
  deploy: { title: 'Deploy react app', group: 'chap3' },
  graphql: { title: 'Basic GraphQL', group: 'chap4' },
  jwt: { title: 'JWT', group: 'chap5' },
  https: { title: 'HTTPS', group: 'chap6' },
  password: { title: 'Encrypt password', group: 'chap6' },
  midterm: { title: 'Midterm', group: 'project' },
  final: { title: 'Final', group: 'project' },
}
export const menus: Menus = {
  chap0: 'Course overview',
  chap1: 'Chap 1: Web technology',
  chap2: 'Chap 2: Become to web developer',
  chap3: 'Chap 3: Front-end (React)',
  chap4: 'Chap 4: Back-end (GraphQL)',
  chap5: 'Chap 5: Authentication',
  chap6: 'Chap 6: Security',
  project: 'Project',
}
