import React from 'react'
import Link from 'gatsby-link'

import Projects from '../../components/projects'
import '../../style/portfolio-index.css'

const Portfolio = () => (
  <div>
    {/* @DONE */}
    {/* @TODO Find a way to make boxes uniform height based on the largest box. */}
    {/* <div className="Grid Grid--full u-textCenter">
      <div className="Grid-cell"> */}
    <div className="row">
      <h2>Portfolio</h2>
      <p className="centeredP">
        These are some of my completed projects that I've hosted on this server
        with live demos. Feel free to try them out and look at the source code.
        Other projects I've completed are on my github as well.
      </p>
    </div>
    <Projects />
  </div>
)

export default Portfolio
