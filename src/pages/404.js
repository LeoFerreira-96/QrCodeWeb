import * as React from "react"

import Layout from "../components/layout"
import Seo from "./seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>Você acaba de entrar em uma rota que não existe... ainda 😏.</p>
    <p>
      por enquanto apenas clique aqui ➡️ <Link to="/">Inicio</Link>
    </p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
