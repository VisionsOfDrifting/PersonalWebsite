import React from 'react'

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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <label htmlFor="menu-3">
              Portfolio <span />
            </label>
            <input
              id="menu-3"
              name="menu-3"
              className="menu-checkbox"
              type="checkbox"
            />
            <div className="menu">
              <label className="menu-toggle" htmlFor="menu-3">
                <span>Toggle</span>
              </label>
              <ul>
                <li>
                  <a href="#">Menu-3-1</a>
                </li>
                <li>
                  <a href="#">Menu-3-3</a>
                </li>
                <li>
                  <a href="#">Menu-3-4</a>
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
