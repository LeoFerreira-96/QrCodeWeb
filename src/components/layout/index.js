/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          position: `relative`,
          display: `flex`,
          flexWrap: `wrap`,
        }}
      >
        <main style={{ marginBottom: `5rem` }}>{children}</main>
        <footer
          style={{
            position: `absolute`,
            bottom: `var(--space-5)`,
            right: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            textAlign: `center`,
            left: `50%`,
            marginTop: `var(--space-10)`,
            marginRight: `-50%`,
            transform: `translate(-50%, -50%)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Desenvolvido por
          {` `}
          <a href="https://github.com/LeoFerreira-96">Leonardo Ferreira</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
