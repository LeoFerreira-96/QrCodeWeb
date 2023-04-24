import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const SecondPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>
        <b>Sobre Mim</b>
      </h1>
    </div>
    <Link to="/">De volta ao Inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
