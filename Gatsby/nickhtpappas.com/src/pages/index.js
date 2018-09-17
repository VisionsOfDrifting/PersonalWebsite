import React from 'react'
import Link from 'gatsby-link'

import Tech from '../components/tech'

import '../style/index-flex.css'

const IndexPage = () => (
  <div className="index-wrap row">
    <div className="index-cell">
      <h2>Who I am</h2>
      <p className="">
        I am a recent college graduate. I have been freelancing building
        websites since I graduated from UC, Santa Cruz. Currently I am seeking
        fulltime employement as a Web Developer in the Los Angeles area.
      </p>
    </div>
    <div className="index-cell">
      <div className="index-row">
        <div className="index-cell">
          <p className=""> Feel free to grab a copy of my resume. </p>
        </div>
        <div className="index-cell ">
          <a href="#" className="button center">
            <i className="fa fa-download" /> View / Download Resume
          </a>
        </div>
      </div>
      <p className="index-cell">
        I have listed some of the projects I've completed with live demos hosted{' '}
        <Link to="/portfolio/portfolio-index">here</Link> in my portfolio along
        with links to the source code on github.
      </p>
      <p className="index-cell">
        If you would like to hire me or collaborate{' '}
        <Link to="/contact">contact me</Link>.
      </p>
      <div className="index-cell">
        <Tech />
      </div>
      <p className="index-cell endP"> Let's build software together!</p>
    </div>
  </div>
)

export default IndexPage
