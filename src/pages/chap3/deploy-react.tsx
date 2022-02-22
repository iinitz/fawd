import { NextPage } from 'next'

import { Link } from '../../components/@mui/Link'
import { CodeBlock } from '../../components/Code'
import {
  Page, PageReferences, PageReferencesLink, PageSubSection,
} from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const buildCode = `
yarn build
# or
npm run build
`
const expressDeployCode = `
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(8000)
`
const apacheDeployCode = `
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
`
const nginxDeployCode = `
server {
  listen       80;
  server_name  localhost;

  root   /usr/share/nginx/html;
  index  index.html index.htm;

  location / {
    try_files $uri $uri/ /index.html;
  }

  location ~* \\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$ {
    expires 1M;
    access_log off;
    add_header Cache-Control "public";
  }
}
`
const netlifyDeployCode = `
/*  /index.html  200
`
const DeployReactPage: NextPage = () => (
  <Page slug="deploy-react">
    <PageSection id="build-react-app" title="Build React app">
      <CodeBlock language="bash" code={buildCode} />
    </PageSection>
    <PageSection id="deploy" title="Deploy">
      <PageSubSection title="Express server">
        <CodeBlock language="javascript" code={expressDeployCode} title="server.js" />
      </PageSubSection>
      <PageSubSection title="Apache HTTP Server">
        <CodeBlock language="none" code={apacheDeployCode} title=".htaccess" />
      </PageSubSection>
      <PageSubSection title="Nginx">
        <CodeBlock language="none" code={nginxDeployCode} title="/etc/nginx/conf.d" />
      </PageSubSection>
      <PageSubSection title="Netlify">
        Login to <Link href="https://www.netlify.com/" color="primary" target="_blank">Netlify</Link>, create a new site and drop your build folder to Netlify
        <CodeBlock language="none" code={netlifyDeployCode} title="/public/_redirects" />
      </PageSubSection>
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://create-react-app.dev/docs/deployment/" title="Create React App: Deployment" />
    </PageReferences>
  </Page>
)

export default DeployReactPage
