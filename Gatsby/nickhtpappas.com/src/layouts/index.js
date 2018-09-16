import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Navigation from '../components/navagation'
import Footer from '../components/footer'
import 'font-awesome/css/font-awesome.min.css'
import '../style/devicon-master/devicon.min.css'
import './index.css'

const Layout = ({ children, data }) => (
  <div id="">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Navigation />
    <div
      className="content"
      // id="top-margin"
      // style={{
      //   margin: '0 auto',
      //   maxWidth: 960,
      //   padding: '3.45rem 1.0875rem 1.45rem',
      // }}
      css={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0rem 1.0875rem 1.45rem',
        position: 'relative',
        top: '100px',
        '@media only screen and (max-width: 768px)': {
          // margin: '0 auto',
          // maxWidth: 960,
          padding: '4.45rem 1.0875rem 1.45rem',
          top: '50px',
        },
        '@media only screen and (max-width: 376px)': {
          // margin: '0 auto',
          // maxWidth: 960,
          // padding: '4.45rem 1.0875rem 1.45rem',
          top: '100px',
        },
      }}
    >
      {children()}
    </div>
    {/* <Footer /> */}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
