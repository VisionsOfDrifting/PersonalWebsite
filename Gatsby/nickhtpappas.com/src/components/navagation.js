import React from 'react'
import Link from 'gatsby-link'

import '../style/navbar.css'

const Navigation = () => {
  return (
    <div>
      <input id="menu" name="menu" className="menu-checkbox" type="checkbox" />
      <div className="menu">
        <label className="menu-toggle" htmlFor="menu">
          <span>Toggle</span>
        </label>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li id="arrow-forward">
            <label htmlFor="menu-3">Portfolio </label>
            <input
              id="menu-3"
              name="menu-3"
              className="menu-checkbox"
              type="checkbox"
            />
            <div className="menu" id="arrow-back">
              <label className="menu-toggle2" htmlFor="menu-3">
                {' '}
                Main Menu
              </label>
              <ul>
                <li>
                  <Link to="/portfolio">Portfolio Index</Link>
                </li>
                <li>
                  <Link to="/portfolio">Mock Linkedin</Link>
                </li>
                <li>
                  <Link to="/portfolio">Budget Trace</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
