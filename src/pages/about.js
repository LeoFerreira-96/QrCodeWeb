import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/index"
import Seo from "./seo"
import * as styles from "../css/index.module.css"
import Carrossel from "../components/carrossel/index"

const About = () => {
  return (
    <Layout>
      <div className={styles.textCenter}>
        <h1>
          <b>Sobre mim</b>
        </h1>
      </div>
      <Carrossel />
      <Link to="/">De volta ao Inicio</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Sobre mim" />

export default About
