import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/index"
import Seo from "./seo"
import * as styles from "../css/index.module.css"

const links = [
  {
    text: "The Universe",
    url: "https://",
    img: { src: "../images/projects/universe.png", alt: "" },
    description: "Lorem ipsom",
  },
  {
    text: "Manager",
    url: "https://",
    img: { src: "../images/projects/", alt: "" },
    description: "Lorem ipsom",
  },
  {
    text: "Landing Page",
    url: "https://",
    img: { src: "../images/projects/landingpage.png", alt: "" },
    description: "Lorem ipsom",
  },
  {
    text: "Pokémon",
    url: "https://",
    img: { src: "../images/projects/pokemon.png", alt: "" },
    description: "Lorem ipsom",
  },
]

const pageLinks = [
  { text: "Sobre mim", url: "about" },
  { text: "Contato", url: "contact" },
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

const Home = () => (
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
    <h2 className={styles.textCenter}>
      <b>Projetos</b>
    </h2>
    <div className="carrossel">
      {links.map((i, index) => (
        <div className="item" key={index}>
          <b>{i.text}</b>
          <div className="image">
            <img src={i.img.src} alt={i.img.alt} />
          </div>
          <div className="info">
            <div className="description">
              <p>{i.description}</p>
            </div>
            <div className="action">
              <Link to={i.url}>
                <b>Entrar</b>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className={styles.textCenter}>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={link.url}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </div>
  </Layout>
)
export const Head = () => <Seo title="Inicio" />

export default Home
