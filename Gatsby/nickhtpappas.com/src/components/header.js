import React from 'react'
import Link from 'gatsby-link'
import '../style/header.css'

const Header = ({ siteTitle }) => (
  <div
    className="Header"
    style={{
      background: '#0C090A',
      // 'rebeccapurple',
      marginBottom: '1.45rem',
      position: 'fixed',
      width: '100%',
      top: '0',
      zIndex: 100,
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.65rem 1.0875rem',
        // position: 'absolute',
        // width: '100%',
      }}
    >
      {/* <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <h1 id="header-title">{siteTitle}</h1>
        <h3 id="header-title">Fullstack Web Developer</h3>
      </Link> */}
      <h1 id="header-title">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 id="header-title">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Fullstack Web Developer
        </Link>
      </h3>
    </div>
  </div>
)

export default Header
