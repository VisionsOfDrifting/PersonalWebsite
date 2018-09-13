import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="row">
      {/* <h2>Hi, I'm Nick. </h2>
      <h2>Welcome to my website!</h2> */}
      <div className="columns center">
        <h2>Who I am</h2>
        <p className="centeredP">
          I am a recent college graduate. I have been building websites for
          small buisnesses, friends, and family for a few months now. Currently
          I am seeking fulltime employement as a Web Developer in the Los
          Angeles area.
        </p>
        <br />
        <p className="centeredPc">
          If you want to hire me or collaborate on projects{' '}
          <Link to="/contact">contact me</Link>.
        </p>
        <br />
      </div>
    </div>
    <div className="row">
      <div className="columns two" />
      <div className="columns four">
        <p className="centeredPc"> Feel free to grab a copy of my resume. </p>
      </div>
      {/* <div className="columns two" /> */}
      {/* You gotta do the row collumn thing to really pull the effect off */}
      <div className="columns four center">
        <a href="#" className="button">
          <i className="fa fa-download" /> Download Resume
        </a>
      </div>
      <div className="columns two" />
    </div>
    <div className="row">
      <div className="columns center">
        <br />
        <h2>Tech that I use</h2>
        <p className="centeredP">
          Recently I have been using Node.js with Express on the back end and
          React.js with Redux on the front end to build things. I've worked with
          NoSQL databases like MongoDB and relational databases like MySQL and
          PostgreSQL. I enjoy working with MERN stacks, I've also done work with
          LAMP stacks. I am constantly learning new things and like to keep
          updated with the latest trends.
        </p>
        <br />
        <p className="centeredPc">
          I have some live demos of projects I've completed hosted{' '}
          <Link to="/portfolio/portfolio-index">here</Link> along with links to
          the source code on github.
        </p>
        <br />
        <p> Let's build software together!</p>
      </div>
    </div>
  </div>
)

export default IndexPage
