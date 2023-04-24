import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"
import Carrossel from "../components/carrossel"

const UsingSSR = () => {
  return (
    <Layout>
      <div className={styles.textCenter}>
        <h1>
          <b>Contato</b>
        </h1>
      </div>
      <Carrossel />
      <Link to="/">De volta ao Inicio</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Using SSR" />

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
