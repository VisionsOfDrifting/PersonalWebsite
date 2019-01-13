import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
    // render={data => {
    //   if (!data.gcms) {
    //     return <p>Loading…</p>
    //   }
    //   return data.gcms.mountains.map(d => (
    //     <Card
    //       title={d.title}
    //       elevation={d.elevation}
    //       src={d.image ? d.image.url : undefined}
    //     />
    //   ))
    // }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
