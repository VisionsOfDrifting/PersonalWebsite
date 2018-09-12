import React from 'react'
import Link from 'gatsby-link'

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
      <h1
        style={{
          margin: 0,
          // fontSize: '1.75rem',
        }}
      >
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
    </div>
  </div>
)

export default Header
