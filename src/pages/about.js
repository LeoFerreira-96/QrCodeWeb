import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/index"
import Seo from "./seo"
import * as styles from "../css/index.module.css"
import Carrossel from "../components/carrossel/index"

const About = () => {
  const pageLinks = [
    { text: "Projetos", url: "/" },
    { text: "Sobre mim", url: "/about" },
    { text: "Contato", url: "/contact" },
  ]
  return (
    <Layout>
      <div className={styles.textCenter}>
        <h1>
          <b>Sobre mim</b>
        </h1>
        <p className={styles.intro}>
          {pageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== pageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
        </p>
      </div>
      <Carrossel />
      <div>
        <h2 className={styles.textCenter}>
          <b>Projetos</b>
        </h2>
        <p>
          Seja bem-vindo à <code>src/leonardo-ferreira/index.js</code>.
        </p>
      </div>
      <Link to="/">De volta ao Inicio</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Sobre mim" />

export default About
