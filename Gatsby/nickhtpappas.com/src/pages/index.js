import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div
    style={{
      height: '100px',
    }}
  >
    <h2>Hi, I'm Nick. Welcome to my website!</h2>

    <h3>Who I am</h3>
    <p>
      I am a recent college graduate. I have been building websites for small
      buisnesses, friends, and family for a few months now. Currently I am
      seeking fulltime employement as a Web Developer in the Los Angeles area.
    </p>
    <p>
      Feel free to grab a copy of my resume.{' '}
      {/* You gotta do the row collumn thing to really pull the effect off */}
      <a
        css={{
          color: 'blue',
          // textDecoration: none,
          ':visited': {
            color: 'blue',
          },
        }}
        href="#"
        className="button"
      >
        <i className="fa fa-download" /> Download Resume
      </a>
    </p>
    <p>
      If you think I'm a good match or want to collaborate{' '}
      <Link
        css={{
          color: 'blue',
          // textDecoration: none,
          ':visited': {
            color: 'blue',
          },
        }}
        to="/contact"
      >
        contact me
      </Link>.
    </p>
    <br />
    <h3>Tech that I use</h3>
    <p>
      Recently I have been using Node.js with Express on the back end and
      React.js with Redux on the front end to build things. I've worked with
      NoSQL databases like MongoDB and relational databases like MySQL and
      PostgreSQL. I enjoy working with MERN stacks, I've also done work with
      LAMP stacks. I am constantly learning new things and like to keep updated
      with the latest trends.
    </p>
    <p>
      I have some live demos of projects I've completed hosted{' '}
      <Link
        css={{
          color: 'blue',
          // textDecoration: none,
          ':visited': {
            color: 'blue',
          },
        }}
        to="/portfolio/portfolio-index"
      >
        here
      </Link>{' '}
      along with links to the source code on github.
    </p>
    <br />
    <p> Let's build software together!</p>
  </div>
)

export default IndexPage
