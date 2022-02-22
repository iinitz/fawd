import { NextPage } from 'next'

import { Link } from '../../components/@mui/Link'
import { Code, CodeBlock } from '../../components/Code'
import { Text } from '../../components/Highlight'
import {
  Page, PageReferences, PageReferencesLink, PageSubSection,
} from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const basicHtmlCode = `
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
`
const htmlElementCode = `
<tagname>Content goes here...</tagname>
`
const skipEndTagCode = `
<body>
  <p>This is a paragraph
  <p>This is a paragraph
</body>
`
const brCode = `
<p>This is a <br> paragraph with a line break.</p>
`
const caseSensitiveCode = `
<P> means the same as <p>
`
const hrefCode = `
<a href="https://www.w3schools.com">Visit W3Schools</a>
`
const srcCode = `
<img src="fswd_logo.png">
`
const widthHeightCode = `
<img src="fswd_logo.png" width="500" height="600">
`
const altCode = `
<img src="fswd_logo.png" alt="Full-stack Web Developer logo">
`
const htmlCommentCode = `
<!-- Write your comments here -->

<p>This is a paragraph.</p>
<!--
<p>Look at this cool image:</p>
<img border="0" src="pic_trulli.jpg" alt="Trulli">
-->
<p>This is a paragraph too.</p>
`
const linkCode = `
<a href="url">link text</a>
`
const linkTargetCode = `
<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
`
const absoluteAndRelativeCode = `
<h2>Absolute URLs</h2>
<p><a href="https://www.w3.org/">W3C</a></p>
<p><a href="https://www.google.com/">Google</a></p>

<h2>Relative URLs</h2>
<p><a href="html_images.asp">HTML Images</a></p>
<p><a href="/css/default.asp">CSS Tutorial</a></p>
`
const blockElementsCode = `
<address>
<article>
<aside>
<blockquote>
<canvas>
<dd>
<div>
<dl>
<dt>
<fieldset>
<figcaption>
<figure>
<footer>
<form>
<h1>-<h6>
<header>
<hr>
<li>
<main>
<nav>
<noscript>
<ol>
<p>
<pre>
<section>
<table>
<tfoot>
<ul>
<video>
`
const inlineElementsCode = `
<a>
<abbr>
<acronym>
<b>
<bdo>
<big>
<br>
<button>
<cite>
<code>
<dfn>
<em>
<i>
<img>
<input>
<kbd>
<label>
<map>
<object>
<output>
<q>
<samp>
<script>
<select>
<small>
<span>
<strong>
<sub>
<sup>
<textarea>
<time>
<tt>
<var>
`
const basicCssCode = `
body {
  background-color: lightblue;
}
h1 {
  color: white;
  text-align: center;
}
p {
  font-family: verdana;
  font-size: 20px;
}
`
const cssSyntaxCode = `
p {
  text-align: center;
  color: red;
}
`
const cssTagSelectorCode = `
p {
  text-align: center;
  color: red;
}
`
const cssIdSelectorCode = `
#para1 {
  text-align: center;
  color: red;
}
`
const cssClassSelectorCode = `
.center {
  text-align: center;
  color: red;
}
`
const cssCommentCode = `
/* This is a single-line comment */

/* This is
a multi-line
comment */

p {
  color: red;  /* Set text color to red */
}
`
const cssVariablesCode = `
/* Traditional way */
body { background-color: #1e90ff; }

h2 { border-bottom: 2px solid #1e90ff; }

.container {
  color: #1e90ff;
  background-color: #ffffff;
  padding: 15px;
}

button {
  background-color: #ffffff;
  color: #1e90ff;
  border: 1px solid #1e90ff;
  padding: 5px;
}

/* Using CSS Variables */
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}

body { background-color: var(--blue); }

h2 { border-bottom: 2px solid var(--blue); }

.container {
  color: var(--blue);
  background-color: var(--white);
  padding: 15px;
}

button {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}
`
const cssVarSyntaxCode = `
var(--name, value)
`
const cssFunctionsCode = `
attr() /* Returns the value of an attribute of the selected element */
calc() /* Allows you to perform calculations to determine CSS property values */
conic-gradient() /* Creates a conic gradient */
counter() /* Returns the current value of the named counter */
cubic-bezier() /* Defines a Cubic Bezier curve */
hsl() /* Defines colors using the Hue-Saturation-Lightness model (HSL) */
hsla() /* Defines colors using the Hue-Saturation-Lightness-Alpha model (HSLA) */
linear-gradient() /* Creates a linear gradient */
max() /* Uses the largest value, from a comma-separated list of values, as the property value */
min() /* Uses the smallest value, from a comma-separated list of values, as the property value */
radial-gradient() /* Creates a radial gradient */
repeating-conic-gradient() /* Repeats a conic gradient */
repeating-linear-gradient() /* Repeats a linear gradient */
repeating-radial-gradient() /* Repeats a radial gradient */
rgb() /* Defines colors using the Red-Green-Blue model (RGB) */
rgba() /* Defines colors using the Red-Green-Blue-Alpha model (RGBA) */
var() /* Inserts the value of a custom property */
`
const HtmlCssPage: NextPage = () => (
  <Page slug="html-css">
    <PageSection id="html" title="HTML">
      <PageSubSection title="Current HTML version is HTML5" />
      HTML is the standard markup language for Web pages
      <PageSubSection title="What is HTML?">
        <ul>
          <li>HTML stands for HyperText Markup Language</li>
          <li>HTML is the standard markup language for creating Web pages</li>
          <li>HTML describes the structure of a Web page</li>
          <li>HTML consists of a series of elements</li>
          <li>HTML elements tell the browser how to display the content</li>
          <li>HTML elements label pieces of content such as &quot;this is a heading&quot;, &quot;this is a paragraph&quot;, &quot;this is a link&quot;, etc.</li>
        </ul>
      </PageSubSection>
      <CodeBlock language="markup" code={basicHtmlCode} />
      <PageSubSection title="Example Explained">
        <ul>
          <li>The <Code>&lt;!DOCTYPE html&gt;</Code> declaration defines that this document is an HTML5 document</li>
          <li>The <Code>&lt;html&gt;</Code> element is the root element of an HTML page</li>
          <li>The <Code>&lt;head&gt;</Code> element contains meta information about the HTML page</li>
          <li>The <Code>&lt;title&gt;</Code> element specifies a title for the HTML page (which is shown in the browser&apos;s title bar or in the page&apos;s tab)</li>
          <li>The <Code>&lt;body&gt;</Code> element defines the document&apos;s body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
          <li>The <Code>&lt;h1&gt;</Code> element defines a large heading</li>
          <li>The <Code>&lt;p&gt;</Code> element defines a paragraph</li>
        </ul>
      </PageSubSection>
    </PageSection>
    <PageSection id="html-element" title="Element">
      The HTML element is everything from the start tag to the end tag
      <CodeBlock language="markup" code={htmlElementCode} />
      <PageSubSection title="Never Skip the End Tag">
        Some HTML elements will display correctly, even if you forget the end tag
        <CodeBlock language="markup" code={skipEndTagCode} />
        <Text>However, never rely on this! Unexpected results and errors may occur if you forget the end tag!</Text>
      </PageSubSection>
      <PageSubSection title="Empty HTML Elements">
        The <Code>&lt;br&gt;</Code> tag defines a line break, and is an empty element without a closing tag
        <CodeBlock language="markup" code={brCode} />
      </PageSubSection>
      <PageSubSection title="HTML tags are not case sensitive">
        <CodeBlock language="markup" code={caseSensitiveCode} />
        The HTML standard does not require lowercase tags, but W3C recommends <Text>lowercase</Text> in HTML, and demands lowercase for stricter document types like XHTML
      </PageSubSection>
    </PageSection>
    <PageSection id="html-attributes" title="Attributes">
      HTML attributes provide additional information about HTML elements
      <PageSubSection title="The href Attribute">
        The <Code>href</Code> attribute specifies the URL of the page the link goes to
        <CodeBlock language="markup" code={hrefCode} />
      </PageSubSection>
      <PageSubSection title="The src Attribute">
        The <Code>src</Code> attribute specifies the path to the image to be displayed
        <CodeBlock language="markup" code={srcCode} />
      </PageSubSection>
      <PageSubSection title="The width and height Attributes">
        The <Code>width</Code> and <Code>height</Code> attributes specifies the width and height of the image (in pixels)
        <CodeBlock language="markup" code={widthHeightCode} />
      </PageSubSection>
      <PageSubSection title="The alt Attribute">
        The <Code>alt</Code> attribute specifies an alternate text for an image, if the image for some reason cannot be displayed<br />
        This can be due to slow connection, or an error in the src attribute, or if the user uses a screen reader
        <CodeBlock language="markup" code={altCode} />
      </PageSubSection>
    </PageSection>
    <PageSection id="html-comments" title="HTML Comments">
      HTML comments are not displayed in the browser, but they can help document your HTML source code
      <CodeBlock language="markup" code={htmlCommentCode} />
    </PageSection>
    <PageSection id="html-links" title="Links">
      Links are found in nearly all web pages. Links allow users to click their way from page to page
      <PageSubSection title="Syntax">
        <CodeBlock language="markup" code={linkCode} />
      </PageSubSection>
      <PageSubSection title="The target Attribute">
        By default, the linked page will be displayed in the current browser window<br />
        To change this, you must specify another target for the link
        <CodeBlock language="markup" code={linkTargetCode} />
        The target attribute can have one of the following values
        <ul>
          <li><Code>_self</Code> - Default. Opens the document in the same window/tab as it was clicked</li>
          <li><Code>_blank</Code> - Opens the document in a new window or tab</li>
          <li><Code>_parent</Code> - Opens the document in the parent frame</li>
          <li><Code>_top</Code> - Opens the document in the full body of the window</li>
        </ul>
      </PageSubSection>
      <PageSubSection title="Absolute URLs vs Relative URLs">
        Both examples above are using an absolute URL (a full web address) in the href attribute<br />
        A local link (a link to a page within the same website) is specified with a relative URL (without the &quot;https://www&quot; part)
        <CodeBlock language="markup" code={absoluteAndRelativeCode} />
      </PageSubSection>
    </PageSection>
    <PageSection id="html-blocks" title="Block and Inline Elements">
      Every HTML element has a default display value, depending on what type of element it is<br />
      There are two display values: <Code>block and inline</Code>
      <PageSubSection title="Block-level Elements">
        A block-level element always starts on a new line<br />
        A block-level element always takes up the full width available (stretches out to the left and right as far as it can)<br />
        A block level element has a top and a bottom margin, whereas an inline element does not
        <CodeBlock language="markup" code={blockElementsCode} />
      </PageSubSection>
      <PageSubSection title="Inline Elements">
        An inline element does not start on a new line<br />
        An inline element only takes up as much width as necessary
        <CodeBlock language="markup" code={inlineElementsCode} />
      </PageSubSection>
    </PageSection>
    <PageSection id="css" title="CSS">
      <PageSubSection title="Current CSS version is CSS3" />
      CSS is the language we use to style an HTML document
      <PageSubSection title="Why Use CSS?">
        CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes
      </PageSubSection>
      <CodeBlock language="css" code={basicCssCode} />
    </PageSection>
    <PageSection id="css-syntax" title="Syntax">
      A CSS rule consists of a selector and a declaration block
      <CodeBlock language="css" code={cssSyntaxCode} />
      <PageSubSection title="Example Explained">
        <ul>
          <li><Code>p</Code> is a selector in CSS (it points to the HTML element you want to style: &lt;p&gt;)</li>
          <li><Code>text-align</Code> is a property, and <Code>center</Code> is the property value</li>
          <li><Code>color</Code> is a property, and <Code>red</Code> is the property value</li>
        </ul>
      </PageSubSection>
    </PageSection>
    <PageSection id="css-selectors" title="Selectors">
      A CSS selector selects the HTML element(s) you want to style
      <PageSubSection title="The CSS element Selector">
        The element selector selects HTML elements based on the element name
        <CodeBlock language="css" code={cssTagSelectorCode} />
        All &lt;p&gt; elements on the page will be center-aligned, with a red text color
      </PageSubSection>
      <PageSubSection title="The CSS id Selector">
        The id selector uses the id attribute of an HTML element to select a specific element<br />
        The id of an element is unique within a page, so the id selector is used to select one unique element!<br />
        To select an element with a specific id, write a hash (#) character, followed by the id of the element
        <CodeBlock language="css" code={cssIdSelectorCode} />
        The CSS rule below will be applied to the HTML element with id=&quot;para1&quot;
      </PageSubSection>
      <PageSubSection title="The CSS class Selector">
        The class selector selects HTML elements with a specific class attribute<br />
        To select elements with a specific class, write a period (.) character, followed by the class name
        <CodeBlock language="css" code={cssClassSelectorCode} />
      </PageSubSection>
    </PageSection>
    <PageSection id="css-comments" title="CSS Comments">
      CSS comments are not displayed in the browser, but they can help document your source code
      <CodeBlock language="css" code={cssCommentCode} />
    </PageSection>
    <PageSection id="css-variables" title="CSS Variables">
      The <Code>var()</Code> function is used to insert the value of a CSS variable<br />
      CSS variables have access to the DOM, which means that you can create variables with local or global scope, change the variables with JavaScript, and change the variables based on media queries
      <CodeBlock language="css" code={cssVariablesCode} />
      <PageSubSection title="Syntax">
        The syntax of the <Code>var()</Code> function is as follows
        <CodeBlock language="css" code={cssVarSyntaxCode} />
        <Text>The variable name must begin with two dashes (--) and it is case sensitive!</Text>
      </PageSubSection>
    </PageSection>
    <PageSection id="css-functions" title="CSS Functions">
      CSS functions are used as a value for various CSS properties
      <CodeBlock language="css" code={cssFunctionsCode} />
    </PageSection>
    <PageSection id="read-more" title="Read more">
      <ul>
        <li><Link href="https://www.w3schools.com/html/html_css.asp" variant="subtitle1">HTML Styles - CSS</Link></li>
        <li><Link href="https://www.w3schools.com/html/html_scripts.asp" variant="subtitle1">HTML JavaScript</Link></li>
        <li><Link href="https://www.w3schools.com/html/html_head.asp" variant="subtitle1">HTML - The Head Element</Link></li>
        <li><Link href="https://www.w3schools.com/html/html_responsive.asp" variant="subtitle1">HTML Responsive Web Design</Link></li>
        <li><Link href="https://www.w3schools.com/html/html_forms.asp" variant="subtitle1">HTML Forms</Link></li>
        <li><Link href="https://www.w3schools.com/html/html_form_input_types.asp" variant="subtitle1">HTML Input Types</Link></li>
        <li><Link href="https://www.w3schools.com/css/css_boxmodel.asp" variant="subtitle1">CSS Box Model</Link></li>
        <li><Link href="https://www.w3schools.com/css/css_display_visibility.asp" variant="subtitle1">CSS Layout - The display Property</Link></li>
        <li><Link href="https://www.w3schools.com/css/css_pseudo_classes.asp" variant="subtitle1">CSS Pseudo-classes</Link></li>
        <li><Link href="https://www.w3schools.com/css/css_pseudo_elements.asp" variant="subtitle1">CSS Pseudo-elements</Link></li>
        <li><Link href="https://www.w3schools.com/css/css_units.asp" variant="subtitle1">CSS Units</Link></li>
        <li><Link href="https://www.w3schools.com/css/css3_flexbox.asp" variant="subtitle1">CSS Flexbox</Link></li>
        <li><Link href="https://www.w3schools.com/css/css_grid.asp" variant="subtitle1">CSS Grid Layout Module</Link></li>
        <li><Link href="https://www.w3schools.com/cssref/css_default_values.asp" variant="subtitle1">CSS Default values</Link></li>
        <li><Link href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp" variant="subtitle1">Responsive Web Design - Media Queries</Link></li>
      </ul>
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://www.w3schools.com/html/" title="W3Schools: HTML Tutorial" />
      <PageReferencesLink href="https://www.w3schools.com/css/" title="W3Schools: CSS Tutorial" />
    </PageReferences>
  </Page>
)

export default HtmlCssPage
