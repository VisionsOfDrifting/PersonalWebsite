import React from 'react'
import Link from 'gatsby-link'

import '../style/navbar.css'

const Navigation = () => {
  // const matchHome = /\/.*?(?=\/)/
  // const matchPortfolio = /\/portfolio\//
  return (
    <div>
      <input id="menu" name="menu" className="menu-checkbox" type="checkbox" />
      <div className="menu">
        <label className="menu-toggle" htmlFor="menu">
          <span>Toggle</span>
        </label>
        <ul>
          <li>
            <Link
              // id={window.location.pathname == '/' ? 'current' : ''}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              // id={window.location.pathname == '/about' ? 'current' : ''}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              // id={window.location.pathname == '/contact' ? 'current' : ''}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              // id={
              //   window.location.pathname == '/portfolio/portfolio-index'
              //     ? 'current'
              //     : ''
              // }
              to="/portfolio/portfolio-index"
            >
              Portfolio
              {/* Index */}
            </Link>
          </li>
          {/* <li id="arrow-forward">
            <label
              // id={
              //   matchPortfolio.test(window.location.pathname) ? 'current' : ''
              // }
              htmlFor="menu-3"
            >
              Portfolio{' '}
            </label>
            <input
              id="menu-3"
              name="menu-3"
              className="menu-checkbox"
              type="checkbox"
            />
            <div className="menu" id="arrow-back">
              <label
                // id={!matchHome.test(window.location.pathname) ? 'current' : ''}
                className="menu-toggle2"
                htmlFor="menu-3"
              >
                {' '}
                Main Menu
              </label>
              <ul>
                <li>
                  <Link
                    // id={
                    //   window.location.pathname == '/portfolio/portfolio-index'
                    //     ? 'current'
                    //     : ''
                    // }
                    to="/portfolio/portfolio-index"
                  >
                    Portfolio Index
                  </Link>
                </li>
                <li>
                  <Link
                    // id={
                    //   window.location.pathname == '/portfolio/project1'
                    //     ? 'current'
                    //     : ''
                    // }
                    to="/portfolio/project1"
                  >
                    Mock Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    // id={
                    //   window.location.pathname == '/portfolio/project2'
                    //     ? 'current'
                    //     : ''
                    // }
                    to="/portfolio/project2"
                  >
                    Budget Trace
                  </Link>
                </li>
              </ul>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Navigation
