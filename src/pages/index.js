import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "The Universe",
    url: "https://",
    description: "Lorem ipsom",
  },
  {
    text: "Manager",
    url: "https://",
    description: "Lorem ipsom",
  },
  {
    text: "Landing Page",
    url: "https://",
    description: "Lorem ipsom",
  },
  {
    text: "Pokémon",
    url: "https://",
    description: "Lorem ipsom",
  },
]

const pageLinks = [
  { text: "Sobre mim", url: "page-2" },
  { text: "Contato", url: "using-ssr" },
]

const moreLinks = [
  { text: "Github", url: "https://gatsby.dev/discord" },
  {
    text: "LinkedIn",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Discord",
    url: "https://gatsbyjs.com/starters/",
  },
]

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>
        <b>Leonardo Ferreira</b>
      </h1>
      <p className={styles.intro}>
        {pageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== pageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Seja bem-vindo à <code>src/leonardo-ferreira/index.js</code>.
      </p>
    </div>
    <h2>
      <b>Projetos</b>
    </h2>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a className={styles.listItemLink} href={link.url}>
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={link.url}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
