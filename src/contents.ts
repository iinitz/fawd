type Group = 'chap0' | 'chap1' | 'chap2' | 'chap3' | 'chap4' | 'chap5' | 'chap6' | 'project'
interface IPage {
  title: string
  url: string
  group: Group
}
export const pages: IPage[] = [
  { title: 'Introduction', url: '/introduction', group: 'chap0' },
  { title: 'Course outline', url: '/outline', group: 'chap0' },
  { title: 'Score', url: '/score', group: 'chap0' },
  { title: 'History of web', url: '/web1', group: 'chap1' },
  { title: 'Current web technologies', url: '/web2', group: 'chap1' },
  { title: 'Future and trends of web', url: '/web3', group: 'chap1' },
  { title: 'Web developer tools', url: '/tools', group: 'chap2' },
  { title: 'Basic web (HTML, CSS)', url: '/html-css', group: 'chap2' },
  { title: 'JavaScript', url: '/javascript', group: 'chap2' },
  { title: 'TypeScript', url: '/typescript', group: 'chap2' },
  { title: 'Basic React', url: '/react', group: 'chap3' },
  { title: 'Component', url: '/component', group: 'chap3' },
  { title: 'Props &amp; State', url: '/props-state', group: 'chap3' },
  { title: 'Hooks', url: '/hooks', group: 'chap3' },
  { title: 'Deploy react app', url: '/deploy', group: 'chap3' },
  { title: 'Basic GraphQL', url: '/graphql', group: 'chap4' },
  { title: 'JWT', url: '/jwt', group: 'chap5' },
  { title: 'HTTPS', url: '/https', group: 'chap6' },
  { title: 'Encrypt password', url: '/password', group: 'chap6' },
  { title: 'Midterm', url: '/midterm', group: 'project' },
  { title: 'Final', url: '/final', group: 'project' },
]
type Menus = {
  [x in Group]: string
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
