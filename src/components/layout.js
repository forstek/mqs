/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import Header from "./header"
import "./layout.css"
import favicon from '../images/favicon.png'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          subtitle
        }
      }
    }
  `)

  return (
    <>
      {/*<Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>*/}
      <Header siteTitle={data.site.siteMetadata.title} siteSubtitle={data.site.siteMetadata.subtitle}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{ fontSize: '11px', textAlign: 'center', color: 'lightGrey' }}>
          Built with 🧡 by
          {` `}
          <a href="https://forstek.co">forstek</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
